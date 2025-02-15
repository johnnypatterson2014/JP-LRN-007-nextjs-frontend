import { fetchPDFData } from '@/lib/pdf-integration';
import PDFComponent from '@/ui/pdf/pdf';
import { PDFData } from "@/lib/definitions";

export default async function PDFList() {
    const pdfs = await fetchPDFData();
    return (
        <div>
            
            {!pdfs.length && <div>Loading...</div>}
            {pdfs.map((pdf: PDFData) => (
                <div>
                <input
                autoComplete="off"
                name="name"
                type="text"
                value={pdf.name}
                onChange={(e) => onChange(e, pdf.id)}
                />
                <a
                href={pdf.file}
                target="_blank"
                rel="noopener noreferrer"
                >
                view pdf
                </a>
                <button
                onClick={() => onDelete(pdf.id)}
                >
                delete pdf
                
                </button>
            </div>
            ))}

        </div>
    );
}