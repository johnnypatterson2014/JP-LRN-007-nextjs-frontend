'use client'
import { useState, useRef } from 'react';
import { handleSearchPdf } from '@/lib/pdfController';

export default function pdfSearch(props) {
    const { onSubmit } = props;
    const inputRef = useRef();
    const [_value, _setValue] = useState('');

    const handleOnChange = (e) => {
        _setValue(e.target.value);
    };

    return (

        <div className="container max-w-screen-md mx-auto m-10 p-5 bg-gray-50 border border-gray-400 rounded">

            Make a query
            <textarea
                id="message"
                rows="4"
                className="block px-2 py-1 my-1 w-full text-md text-gray-900 bg-white rounded-lg border border-gray-300"
                placeholder="Enter text here..."
                value={_value}
            // onSubmit={handleSearchPdf}
            ></textarea>


            <button
                id="submit-query"
                className="border border-gray-500 mt-1 p-1 bg-gray-300 rounded hover:bg-gray-100"
                onClick={() => onSubmit(_value)}
            >Submit question</button>

            <div className="block mt-5">

                Response
                <textarea id="chat-response" rows="4"
                    className="block px-2 py-1 my-1 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    readOnly
                    placeholder="Response will show here..."></textarea>

            </div>

        </div>

    )
}