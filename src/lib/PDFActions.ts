import { PDFData } from "@/lib/definitions";

export async function fetchPDFData() {
    let path = '/pdfs';
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
    // const pdfs: PDFData[] = await response.json()
    const pdfs = await response.json()
    return pdfs;
}
