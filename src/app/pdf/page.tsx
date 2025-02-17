import PDFUpload from '@/components/pdf/PDFUpload'
import PDFList from '@/components/pdf/PDFList'
import PDFQuery from '@/components/pdf/PDFQuery'
import { fetchPDFData, handleDeletePdf } from '@/lib/PDFActions';

export default function Page() {
    return (
        <div id="main" className="container max-w-screen-md mx-auto m-5 p-2 border border-gray-500 rounded shadow bg-gray-100">

            <PDFList />
            <PDFQuery />

        </div>
    );
}