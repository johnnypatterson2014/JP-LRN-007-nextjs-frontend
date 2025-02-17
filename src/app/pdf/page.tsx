import PDFUpload from '@/components/pdf/PDFUpload'
import PDFList from '@/components/pdf/PDFList'
import PDFQuery from '@/components/pdf/PDFQuery'
import { fetchPDFData } from '@/lib/PDFActions';
import { PDFData } from "@/lib/definitions";

export default async function Page() {
    const pdfs = await fetchPDFData();

    return (
        <div id="main" className="container max-w-screen-md mx-auto m-5 p-2 border border-gray-500 rounded shadow bg-gray-100">

            <PDFList pdfList={pdfs} />
            <PDFQuery />

        </div>
    );
}