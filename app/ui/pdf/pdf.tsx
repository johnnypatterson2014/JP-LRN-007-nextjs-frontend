
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
          view pdf
        </a>
        <button
          onClick={() => onDelete(pdf.id)}
        >
          delete pdf
          
        </button>
      </div>
    );
  }