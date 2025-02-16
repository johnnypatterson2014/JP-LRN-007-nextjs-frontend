
export default function PDFUpload() {

    return (

        <div className="block m-4 p-4 border border-gray-500 rounded bg-gray-200">

            Upload PDF file
            <form>
                <input id="upload-file-name" className="w-3/4 border border-gray-500 m-1 p-1 rounded bg-white" type="file" accept=".pdf" />
                <button id="upload-file-button" className="border px-2 border-gray-500 m-0 p-1 bg-gray-300 rounded hover:bg-gray-100" type="submit">Load PDF</button>
            </form>

        </div>

    )
}