
export default function PDFQuery() {

    return (

    <div className="block m-4 p-4 border border-gray-500 rounded bg-gray-200">

        Make a query
        <textarea id="message" rows={4} className="block px-2 py-1 my-1 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter text here..."></textarea>


        <button id="submit-query" className="border border-gray-500 mt-1 p-1 bg-gray-300 rounded hover:bg-gray-100">Submit question</button>

        <div className="block mt-5">

        Response
        <textarea id="message" rows={4} className="block px-2 py-1 my-1 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-500" placeholder="Response will show here..."></textarea>

        </div>

    </div>

    )
}