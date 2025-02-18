'use client'
import { createPdf } from '@/lib/pdfController';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

export default function pdfCreate() {
    const [myFormState, myFormAction] = useActionState(createPdf, {})
    console.log(myFormState)

    return (

        <div className="container max-w-screen-md mx-auto m-10 p-5 border border-gray-200 rounded">

            Upload PDF file
            <form action={myFormAction}>
                <input name="upload_file" id="upload-file-name" className="w-3/4 border border-gray-500 m-1 p-1 rounded bg-white" type="file" accept=".pdf" />
                <button id="upload-file-button" className="border px-2 border-gray-500 m-0 p-1 bg-gray-300 rounded hover:bg-gray-100" type="submit">Load PDF</button>
            </form>

        </div>

    )

}