import "@/styles/test.module.css";

export default function Page() {
    return (
        <div id="main" className="container max-w-screen-md mx-auto m-5 p-2 border border-gray-500 rounded shadow bg-gray-100">

            <div className="block m-4 p-4 border border-gray-500 rounded bg-gray-200">

                Upload PDF file
                <form>
                    <input id="upload-file-name" type="file" accept=".pdf" className="file-input file-input-bordered file-input-sm w-3/4" />
                    <button id="upload-file-button" className="border px-2 border-gray-500 m-0 p-1 bg-gray-300 rounded hover:bg-gray-100" type="submit">Load PDF</button>
                </form>

            </div>

            <div className="block m-4 p-4 border border-gray-500 rounded bg-gray-200">

                List of PDF files
                <form>
                    <div className="block mt-2 p-0">

                        <div className="m-0 p-0">

                            <input type="radio" name="radio-1" className="radio" defaultChecked />

                            <input
                                className="input input-bordered inline w-1/2 h-10 mx-2 p-2"
                                autoComplete="off"
                                name="name"
                                type="text"
                                value="pdf-filename.pdf"
                                readOnly
                            />

                            <button id="link-to-pdf-file" className="inline px-2 border border-gray-500 m-0 p-1 bg-gray-300 rounded hover:bg-gray-100">view PDF</button>
                            <button id="delete-pdf-file" className="inline mx-1 px-2 border border-gray-500 m-0 p-1 bg-gray-300 rounded hover:bg-gray-100">delete PDF</button>

                        </div>
                    </div>

                    <div className="block mt-2 p-0">

                        <div className="m-0 p-0">

                            <input type="radio" name="radio-1" className="radio" />

                            <input
                                className="input input-bordered inline w-1/2 h-10 mx-2 p-2"
                                autoComplete="off"
                                name="name"
                                type="text"
                                value="pdf-filename2.pdf"
                                readOnly
                            />

                            <button id="link-to-pdf-file" className="inline px-2 border border-gray-500 m-0 p-1 bg-gray-300 rounded hover:bg-gray-100">view PDF</button>
                            <button id="delete-pdf-file" className="inline mx-1 px-2 border border-gray-500 m-0 p-1 bg-gray-300 rounded hover:bg-gray-100">delete PDF</button>

                        </div>
                    </div>

                </form>

            </div>

            <div className="block m-4 p-4 border border-gray-500 rounded bg-gray-200">

                Make a query
                <textarea id="message" rows="4" className="block px-2 py-1 my-1 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-500" placeholder="Enter text here..."></textarea>


                <button id="submit-query" className="border border-gray-500 mt-1 p-1 bg-gray-300 rounded hover:bg-gray-100">Submit question</button>

                <div className="block mt-5">

                    Response
                    <textarea id="message" rows="4"
                        className="block px-2 py-1 my-1 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-500"
                        readOnly
                        placeholder="Response will show here..."></textarea>

                </div>

            </div>


        </div>
    )
}