import Image from 'next/image';

export default function PDFComponent(props) {
  const { pdf, onChange, onDelete } = props;
  return (
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
        <Image alt="view pdf" src="/document-view.svg" width="22" height="22" />
      </a>
      <button
        onClick={() => onDelete(pdf.id)}
      >
        <Image alt="delete pdf" src="/delete-outline.svg" width="24" height="24" />
        
      </button>
    </div>
  );
}
