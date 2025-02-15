import { PDFData } from "./definitions";

export async function fetchPDFData() {
    let path = '/pdfs';
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
    const pdfData = await response.json()
    return pdfData.map((pdf: PDFData) => ({
        id: String(pdf.id),
        name: String(pdf.name),
        file: String(pdf.file)
      }))
}