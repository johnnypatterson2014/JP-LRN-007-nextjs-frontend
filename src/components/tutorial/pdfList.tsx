
// import { useActionState } from 'react';
// import { useFormStatus } from 'react-dom';
import { PDFData } from "@/lib/definitions";
import Pdf from '@/components/tutorial/pdf';

export default async function pdfList(props) {
    // const [myFormState, myFormAction] = useActionState(fetchPDFData, {})
    // const pdfList = await fetchPDFData();

    return (

        <div className="container max-w-screen-md mx-auto m-10 p-5 bg-gray-50 border border-gray-400 rounded">

            List of PDF files
            <div className="block mt-2 p-0">
                {!props.pdfList.length && <div>Loading...</div>}

                {props.pdfList.map((pdf: PDFData) => (
                    <Pdf pdf={pdf} key={pdf.id} setSelectedPdfId={props.setSelectedPdfId} />
                ))}

            </div>
        </div>
    )

}