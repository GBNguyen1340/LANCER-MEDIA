"use client";

import dynamic from "next/dynamic";
import { forwardRef } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const Editor = dynamic(() => import("react-draft-wysiwyg").then((mod) => mod.Editor), {
  ssr: false,
});

// function uploadImageCallback(file) {
  //   return new Promise(
  //     (resolve, reject) => {
  //       resolve({ data: { link: "http://dummy_image_src.com" } });
  //     }
  //   );
  // }

export default forwardRef(function RichTextEditor(props, ref) {
  
  let modalTitleClassName = cn("text-sm");

  return (
    <div className="flex flex-col gap-4 py-4 sm:flex-row">
      <Label htmlFor={props.id} className="shrink-0 w-32 font-medium">
        {props.label}
      </Label>
      <Editor
        editorClassName={cn(
          "h-5/6 w-full border rounded-md px-3 min-h-[250px] cursor-text ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ",
          props.editorClassName
        )}
        toolbarClassName={cn("text-sm")}
        toolbar={{
          options: ["inline", "list", "link", "history"],
          inline: {
            options: ["bold", "italic", "underline"],
          },
          embedded: { className: modalTitleClassName },
          picture: { className: modalTitleClassName },
        }}
        editorRef={(r) => {
          if (typeof ref === "function") {
            ref(r);
          } else if (ref) {
            ref.current = r;
          }
        }}
        {...props}
      />
    </div>
  );
});
