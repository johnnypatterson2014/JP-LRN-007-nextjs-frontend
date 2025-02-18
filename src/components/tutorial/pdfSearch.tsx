
export default function pdfSearch() {

    return (

        <div className="container max-w-screen-md mx-auto m-10 p-5 bg-gray-50 border border-gray-400 rounded">

            Make a query
            <textarea id="message" rows="4" className="block px-2 py-1 my-1 w-full text-md text-gray-900 bg-white rounded-lg border border-gray-300" placeholder="Enter text here..."></textarea>


            <button id="submit-query" className="border border-gray-500 mt-1 p-1 bg-gray-300 rounded hover:bg-gray-100">Submit question</button>

            <div className="block mt-5">

                Response
                <textarea id="message" rows="4"
                    className="block px-2 py-1 my-1 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    readOnly
                    placeholder="Response will show here..."></textarea>

            </div>

        </div>

    )
}