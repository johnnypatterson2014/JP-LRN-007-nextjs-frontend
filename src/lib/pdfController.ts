'use server'
import { PDFData } from "@/lib/definitions";

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
    }

    console.log(formData)
    console.log(uploadFile)

    if (errors.uploadFile) {
        console.log("No file selected.")
        return {
            errors: errors,
            success: false
        }
    }

    // TODO: store pdf

    return {
        upload_file: uploadFile,
        success: true
    }
}

