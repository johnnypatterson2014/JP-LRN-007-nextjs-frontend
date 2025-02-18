import ClientComponent from '@/components/tutorial/clientComponent';
import PdfCreate from '@/components/tutorial/pdfCreate';
import PdfList from '@/components/tutorial/pdfList';
import "@/styles/test.module.css";

export default function Page() {

    return (
        <>
            <PdfCreate />
            <PdfList />
        </>
    );
}