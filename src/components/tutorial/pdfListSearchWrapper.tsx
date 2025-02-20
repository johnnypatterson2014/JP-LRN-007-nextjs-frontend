'use client'
import PdfList from '@/components/tutorial/pdfList';
import PdfSearch from '@/components/tutorial/pdfSearch';
import { useState } from 'react';
import { Suspense } from 'react';

export default function pdfListSearchWrapper(props) {
    const [selectedPdfId, setSelectedPdfId] = useState("")

    return (
        <>
            <PdfList pdfList={props.pdfList} setSelectedPdfId={setSelectedPdfId} />
            <PdfSearch pdfList={props.pdfList} selectedPdfId={selectedPdfId} />
        </>
    );
}