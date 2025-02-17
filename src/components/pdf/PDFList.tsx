import { fetchPDFData } from '@/lib/PDFActions';
// import { useState, useEffect, useRef } from 'react';
import { PDFData } from "@/lib/definitions";
// import { debounce } from 'lodash';

// function handlePdfChange(id: string) {
//     console.log(id);
// }

export default async function PDFList() {
    const pdfs = await fetchPDFData();

    return (
        <div id="main" className="container max-w-screen-md mx-auto m-5 p-2 border border-gray-500 rounded shadow bg-gray-100">

            <div className="block m-4 p-4 border border-gray-500 rounded bg-gray-200">

                Upload PDF file
                <form>
                    <input
                        id="upload-file-name"
                        className="w-3/4 border border-gray-500 m-1 p-1 rounded bg-white"
                        type="file"
                        accept=".pdf"
                        // onChange={handleFileChange}
                        readOnly
                    />
                    <button
                        id="upload-file-button"
                        className="border px-2 border-gray-500 m-0 p-1 bg-gray-300 rounded hover:bg-gray-100"
                        type="submit">Load PDF</button>
                </form>

            </div>

            <div className="block m-4 p-4 border border-gray-500 rounded bg-gray-200">

                List of PDF files
                <div className="block mt-2 p-0">
                    {!pdfs.length && <div>Loading...</div>}

                    {pdfs.map((pdf: PDFData) => (
                        <div key={pdf.id} className="mt-2 p-0">
                            <input
                                className="inline w-4/6 h-10 border border-gray-500 rounded mx-2 p-2"
                                autoComplete="off"
                                name="name"
                                type="text"
                                value={pdf.name}
                                // onChange={handlePdfChange(pdf.id)}
                                readOnly
                            />

                            <a
                                href={pdf.file}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View PDF
                            </a>

                            <button
                                id="delete-pdf-file"
                                className="inline mx-1 px-2 border border-gray-500 m-0 p-1 bg-gray-300 rounded hover:bg-gray-100"
                            // onClick={() => handleDeletePdf(pdf.id, pdfs, setPdfs)}
                            >delete PDF</button>
                        </div>
                    ))}

                </div>

            </div>

        </div>

    );
}