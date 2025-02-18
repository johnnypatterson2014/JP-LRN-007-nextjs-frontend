import { fetchPDFData } from '@/lib/pdfController';
// import { useActionState } from 'react';
// import { useFormStatus } from 'react-dom';
import { PDFData } from "@/lib/definitions";
import Pdf from '@/components/tutorial/pdf';

export default async function pdfList() {
    // const [myFormState, myFormAction] = useActionState(fetchPDFData, {})
    const pdfList = await fetchPDFData();

    return (

        <div className="container max-w-screen-md mx-auto m-10 p-5 border border-gray-200 rounded">

            List of PDF files
            <div className="block mt-2 p-0">
                {!pdfList.length && <div>Loading...</div>}

                {pdfList.map((pdf: PDFData) => (
                    <Pdf pdf={pdf} key={pdf.id} />
                ))}

            </div>
        </div>
    )

}