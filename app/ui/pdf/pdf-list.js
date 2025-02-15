'use client'
import { useState, useEffect, useCallback, useRef } from 'react';
import { debounce } from 'lodash';
import PDFComponent from '@/ui/pdf';
import TextArea from '@/ui/textarea';

export default function PdfList() {
  const [pdfs, setPdfs] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filter, setFilter] = useState();
  const didFetchRef = useRef(false);

  useEffect(() => {
    if (!didFetchRef.current) {
      didFetchRef.current = true;
      fetchPdfs();
    }
  }, []);

  async function fetchPdfs(selected) {
    let path = '/pdfs';
    if (selected !== undefined) {
      path = `/pdfs?selected=${selected}`;
    }
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
    const json = await res.json();
    setPdfs(json);
  }

  const debouncedUpdatePdf = useCallback(debounce((pdf, fieldChanged) => {
    updatePdf(pdf, fieldChanged);
  }, 500), []);

  function handlePdfChange(e, id) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const copy = [...pdfs];
    const idx = pdfs.findIndex((pdf) => pdf.id === id);
    const changedPdf = { ...pdfs[idx], [name]: value };
    copy[idx] = changedPdf;
    debouncedUpdatePdf(changedPdf, name);
    setPdfs(copy);
  }

/*   async function updatePdf(pdf, fieldChanged) {
    const data = { [fieldChanged]: pdf[fieldChanged] };

    await fetch(process.env.NEXT_PUBLIC_API_URL + `/pdfs/${pdf.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
  } */

/* Our Honor Student Robert Merchant finds out that the following 
version of the previous function works better:

This bug fix applies to all projects that use a select checkbox 
to select or unselect an item from a list of items on the frontend 
(PDFs, etc). There is a problem with the "updatePDF( )" function 
that gets called when a user selects (or unselects) a checkbox, 
for example a PDF file. The update fails, because the PUT operation 
is expecting ALL of the PDF item fields/columns to be replaced 
(name, file, selected), not just the "selected" column.

If you have replaced the old function with the new function, 
you will need to restart the frontend.*/

  async function updatePdf(pdf, fieldChanged) {
    const body_data = JSON.stringify(pdf);
    const url = process.env.NEXT_PUBLIC_API_URL + `/pdfs/${pdf.id}`;

    await fetch(url, {
        method: 'PUT',
        body: body_data,
        headers: { 'Content-Type': 'application/json' }
    });
  }

  async function handleDeletePdf(id) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/pdfs/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
      const copy = pdfs.filter((pdf) => pdf.id !== id);
      setPdfs(copy);
    }
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please select file to load.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/pdfs/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const newPdf = await response.json();
      setPdfs([...pdfs, newPdf]);
    } else {
      alert("Error loading file.");
    }
  };

  function handleFilterChange(value) {
    setFilter(value);
    fetchPdfs(value);
  }

  function getSelectedPdfs(pdf) {
    // console.log(pdf.selected);
    return pdf.selected;
  }

  async function handleSearchPdf(value) {
    // console.log(value);
    const body_data = `{ "question": "${value}"}`;

    // const copy = [...pdfs];
    const selectedFiles = pdfs.filter(getSelectedPdfs);
    // console.log(selectedFiles);

    if (selectedFiles.length == 0) {
      alert("Please select file to ask about.");
      return;
    }

    // console.log(selectedFiles[0]);
    const url = process.env.NEXT_PUBLIC_API_URL + `/pdfs/qa-pdf/${selectedFiles[0].id}`;

    const response = await fetch(url, {
        method: 'POST',
        body: body_data,
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      const answer = await response.json();
      console.log(answer);
      const element = document.getElementById('chat-response');
      element.innerHTML = answer;
    }
    return;
  }

  return (
    <div>
      <div>
        <form onSubmit={handleUpload}>
          <input type="file" accept=".pdf" onChange={handleFileChange} />
          <button type="submit">Load PDF</button>
        </form>
      </div>
      {!pdfs.length && <div>Loading...</div>}
      {pdfs.map((pdf) => (
        <PDFComponent key={pdf.id} pdf={pdf} onDelete={handleDeletePdf} onChange={handlePdfChange} />
      ))}
      
    <div>
      <TextArea onSubmit={handleSearchPdf}/>
    </div>

        <div id='chat-response'>
            
        </div>
    </div>
  );
}
