"use client"
import { Editor } from "@tinymce/tinymce-react";

interface IInput  {
  error?: string;
  label: string;
  name : string;
  value:string;
  onChange: (input : string)=> void
}

export const TinyMce: React.FC<IInput> = ({ error, label,name,onChange,value}) => {
  return (
    <>
      <label
        htmlFor={name}
        className="text-black/60 font-semibold text-sm md:text-base inline-block min-w-36"
      >
        {label} :{" "}
      </label>
      <Editor
        onEditorChange={onChange}
        value={value}
        textareaName={name}
        apiKey={process.env.NEXT_PUBLIC_TINY_APIKEY}
        // onInit={(_evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 400,
          //   menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />{" "}
      {error && (
        <p className="text-sm text-center font-semibold text-red-400 my-1">
          {error}
        </p>
      )}
    </>
  );
};
