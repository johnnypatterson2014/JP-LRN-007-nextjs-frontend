'use server'

export async function fetchPDFData(setPdfs: (arg0: any) => void) {
    let path = '/pdfs';
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
    const pdfData = await response.json()
    setPdfs(pdfData);
    // console.log("testing");
    // return pdfData.map((pdf: PDFData) => ({
    //     id: String(pdf.id),
    //     name: String(pdf.name),
    //     file: String(pdf.file)
    //   }))
}

interface PDFData {
    id: string;
    name: string;
    file: string;
  };

export async function handleDeletePdf(id: any, pdfs: PDFData[], setPdfs: (arg0: any) => void) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/pdfs/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
      const copy = pdfs.filter((pdf) => pdf.id !== id);
      setPdfs(copy);
    }
}