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
    const errors = {}
    const uploadFile = formData.get('upload_file')
    console.log(formData)
    console.log(uploadFile)
    return {
        upload_file: uploadFile
    }
}

