import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFView() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  function onDocumentLoadSuccess() {
    setNumPages(1);
  }

  return (
    <div>
      <Document file="test2.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        {/* <Page pageNumber={pageNumber} /> */}
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default PDFView;
