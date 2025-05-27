import React from 'react';
import { createRoot } from 'react-dom/client';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-google-blue mb-6">
          Interactive AI Textbook Chapter Generator
        </h1>
        <p className="text-lg text-secondary-text mb-4">
          Welcome! This application is ready to transform your textbook chapter content into a stunning and interactive HTML page.
        </p>
        <p className="text-lg text-secondary-text">
          Please provide the chapter content according to the established specifications to begin the generation process. You can also open generated HTML files directly, like "applied_ai_chapter_0_intro.html".
        </p>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('Failed to find the root element');
}