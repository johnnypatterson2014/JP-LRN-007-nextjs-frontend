import ClientComponent from '@/components/tutorial/clientComponent';
import PdfCreate from '@/components/tutorial/pdfCreate';
import PdfList from '@/components/tutorial/pdfList';
import PdfSearch from '@/components/tutorial/pdfSearch';
import PdfListSearchWrapper from '@/components/tutorial/pdfListSearchWrapper';
import "@/styles/test.module.css";
import { fetchPDFData } from '@/lib/pdfController';
import { Suspense } from 'react';


export default async function Page() {
    const pdfList = await fetchPDFData();

    return (
        <>
            <PdfCreate />
            <PdfList pdfList={pdfList} />
            <PdfSearch pdfList={pdfList} />
            {/* <Suspense> */}
            {/* <PdfListSearchWrapper pdfList={pdfList} /> */}
            {/* </Suspense> */}

        </>
    );
}