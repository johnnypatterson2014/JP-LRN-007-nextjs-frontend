'use client'
import { handleSearchPdf } from '@/lib/pdfController';
import { useActionState } from 'react';

export default function pdfSearch(props) {
    const [myFormState, myFormAction] = useActionState(handleSearchPdf, {})

    return (

        <div className="container max-w-screen-md mx-auto m-10 p-5 bg-gray-50 border border-gray-400 rounded">

            <form action={myFormAction} className="inline">

                Make a query
                <textarea
                    name="myquery"
                    id="myquery"
                    rows="4"
                    className="block px-2 py-1 my-1 w-full text-md text-gray-900 bg-white rounded-lg border border-gray-300"
                    placeholder="Enter text here..."
                // onSubmit={handleSearchPdf}
                ></textarea>

                <input name="pdfList" type="hidden" defaultValue={props.pdfList} />

                <input name="selectedPdfId" type="hidden" value={props.selectedPdfId} />

                <button
                    id="submit-query"
                    type="submit"
                    className="border border-gray-500 mt-1 p-1 bg-gray-300 rounded hover:bg-gray-100"
                >Submit question</button>

            </form>

            <div className="block mt-5">

                Response
                {
                    myFormState.success ? (
                        <textarea id="chat-response" rows="4"
                            className="block px-2 py-1 my-1 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                            readOnly
                            placeholder={myFormState.response}></textarea>
                    ) : (
                        <textarea id="chat-response" rows="4"
                            className="block px-2 py-1 my-1 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                            readOnly
                            placeholder="Response will show here..."></textarea>
                    )
                }

            </div>

        </div>

    )
}