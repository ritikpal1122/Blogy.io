import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  // Quill modules with extended toolbar options
  const modules = {
    toolbar: [
      // Font and size
      [{ 'font': [] }, { 'size': ['small', false, 'large', 'huge'] }], 
      
      // Headers
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
      // Text styling
      ['bold', 'italic', 'underline', 'strike'], 
      
      // Text color and background color
      [{ 'color': [] }, { 'background': [] }],
      
      // Alignment
      [{ 'align': [] }],
      
      // Lists and indentation
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      
      // Links, images, and videos
      ['link', 'image', 'video'],
      
      // Clean formatting
      ['clean']
    ],
  };

  // Supported formats
  const formats = [
    'font', 'size',
    'header',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'align',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  return (
    <ReactQuill 
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      className="h-64 mb-12  border-gray-300 rounded-lg"
    />
  );
};

export default RichTextEditor;
