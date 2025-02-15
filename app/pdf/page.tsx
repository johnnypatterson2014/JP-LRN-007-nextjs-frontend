import PDFUpload from '@/ui/pdf/pdf-upload';
import PDFList from '@/ui/pdf/pdf-list';
import PDFSearch from '@/ui/pdf/pdf-search';
import PDFChatResponse from '@/ui/pdf/chat-response';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div>
      <PDFUpload />

      <Suspense fallback={<div>Loading...</div>}>
        <PDFList />
      </Suspense>
      
      <PDFSearch />
      <PDFChatResponse />
    </div>
  );
}