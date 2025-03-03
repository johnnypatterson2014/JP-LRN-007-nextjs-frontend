'use server'
import { PDFData } from "@/lib/definitions";
import { redirect } from "next/navigation";

export async function testAction(prevState, formData) {
    const errors = {}
    const uploadFileName = formData.get('upload-file-name')
    console.log(formData)
    console.log(uploadFileName)
    return {
        upload_file_name: uploadFileName
    }
}

export async function fetchPDFData() {
    let path = '/pdfs';
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
    // const pdfs: PDFData[] = await response.json()
    const pdfs = await response.json()
    return pdfs;
}

export async function createPdf(prevState, formData) {
    console.log("createPdf called.")
    const errors = {}
    const uploadFile = formData.get('upload_file')

    if (!uploadFile || uploadFile.name == "undefined") {
        errors.uploadFile = "Please select a file.";
        console.log("No file selected.")
        return {
            errors: errors,
            success: false
        }
    }

    console.log(formData)
    console.log(uploadFile)

    // TODO: store pdf
    const formDataNew = new FormData();
    formDataNew.append("file", uploadFile);

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/pdfs/upload", {
        method: "POST",
        body: formDataNew,
    });

    if (response.ok) {
        const newPdf = await response.json();
        console.log(newPdf);
        //   setPdfs([...pdfs, newPdf]);

        // return {
        //     backend_response: newPdf,
        //     success: true
        // }
        return redirect("/tutorial")
    } else {
        errors.uploadFileResponse = "Error uploading file.";
        console.log("Error uploading file.")
        return {
            errors: errors,
            success: false
        }
    }
}

export async function handleDeletePdf(formData) {
    let pdfId = formData.get("id")
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/pdfs/${pdfId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
        //   const copy = pdfs.filter((pdf) => pdf.id !== id);
        //   setPdfs(copy);
        return redirect("/tutorial")
    }
}

function getSelectedPdfs(pdf) {
    // console.log(pdf.selected);
    return pdf.selected;
}

export async function handleSearchPdf(prevState, formData) {

    const value = formData.get("myquery");
    const pdfs = formData.get("pdfList")
    const selectedPdfId = formData.get("selectedPdfId")
    console.log(value);
    console.log("selected pdf id: " + selectedPdfId);
    // console.log(pdfs);
    const body_data = `{ "question": "${value}"}`;
    // const copy = [...pdfs];
    // const selectedFiles = pdfList.filter(getSelectedPdfs);
    const selectedFileId = selectedPdfId;
    // console.log(selectedFiles);
    if (selectedPdfId == 'undefined' || selectedPdfId.length == 0) {
        console.log("No file selected.");
        return {
            error: "No file selected",
            success: false
        };
    }
    // console.log(selectedFiles[0]);
    const url = process.env.NEXT_PUBLIC_API_URL + `/pdfs/qa-pdf/${selectedFileId}`;
    const response = await fetch(url, {
        method: 'POST',
        body: body_data,
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        const answer = await response.json();
        console.log(answer);
        // const element = document.getElementById('chat-response');
        // element.innerHTML = answer;
        return {
            success: true,
            response: answer
        };
    }
    return {
        error: "unexpected error",
        success: false
    };
}

