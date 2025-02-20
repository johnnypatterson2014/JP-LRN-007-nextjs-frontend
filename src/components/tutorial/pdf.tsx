'use client'
import { useState } from "react"
import { handleDeletePdf } from '@/lib/pdfController';

export default function Pdf(props) {

    return (
        <div key={props.pdf.id} className="mt-2 p-0">


            <input
                id={props.pdf.id}
                value={props.pdf.id}
                type="radio"
                name="selected_file"
                onChange={(e) =>
                    props.setSelectedPdfId(e.target.value)
                }
                className="inline" />

            <form action={handleDeletePdf} className="inline">

                <input
                    className="inline w-1/2 h-10 border border-gray-500 rounded mx-2 p-2"
                    autoComplete="off"
                    name="name"
                    type="text"
                    value={props.pdf.name}
                    // onChange={handlePdfChange(pdf.id)}
                    readOnly
                />

                <a
                    href={props.pdf.file}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View PDF
                </a>

                <input name="id" type="hidden" defaultValue={props.pdf.id} />
                <button
                    className="inline mx-1 px-2 border border-gray-500 m-0 p-1 bg-gray-300 rounded hover:bg-gray-100"
                // onClick={() => handleDeletePdf(pdf.id)}
                >delete PDF</button>
            </form>

        </div>
    )
}