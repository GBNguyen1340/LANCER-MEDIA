"use client";

import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { FormStateMessage } from "@/app/services/enum";
import SubmitButton from "@/components/button/submitButton";
import { useFormState } from "react-dom";
import { createTalent } from "@/app/services/actions/talents";
import RichTextEditor from "@/components/ui/richTextEditor";
import { useEffect, useRef, useState } from "react";
import { ContentState, EditorState, convertToRaw } from "draft-js";
import CancelButton from "@/components/button/cancelButton";
import Alert from "@/components/layout/shared/alert";
import { InputFile } from "@/components/ui/inputFile";

const initialState = { message: null, errors: {} };

export default function FormCreateTalent({ talent, accessToken }) {
  const [formState, formAction] = useFormState(createTalent, initialState);
  const formRef = useRef(null);

  const [editorState, setEditorState] = useState();
  const [contentStateRaw, setContentStateRaw] = useState();

  const onEditorStateChange = (newEditorState) => {
    let contentState = newEditorState.getCurrentContent();
    let content = convertToRaw(contentState);
    setContentStateRaw(JSON.stringify(content));
    setEditorState(newEditorState);
  };

  useEffect(() => {
    const content = ContentState.createFromText("");
    const editorState = EditorState.createWithContent(content);
    const contentRaw = convertToRaw(content);
    setContentStateRaw(JSON.stringify(contentRaw));
    setEditorState(editorState);
  }, []);

  useEffect(() => {
    console.log("formState", formState);
    if (formState.message === FormStateMessage.SUCCESS) {
      formRef.current?.reset();
    }
  }, [formState]);

  return (
    <>
      <form
        action={formAction}
        className="m-8 max-w-screen rounded-md border border-gray-200 bg-white shadow-sm p-4 pb-12"
        ref={formRef}
      >
        {formState.message && (
          <Alert label="Talent Updated" content={formState?.message} type={formState?.message} />
        )}
        <input type="hidden" name="id" value={talent?.id}></input>
        <div className="flex flex-col border-b py-2 sm:flex-row sm:items-start">
          <div className="shrink-0 mr-auto sm:py-3">
            <h3 className="font-bold text-xl">Thông tin talent</h3>
          </div>
          <CancelButton href="/talents"></CancelButton>
          <SubmitButton
            label="Save"
            className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700"
          ></SubmitButton>
        </div>
        <div id="name-error" aria-live="polite" aria-atomic="true">
          {formState.errors?.type &&
            formState.errors.type.map((error) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <InputWithLabel
          name="name"
          id="name"
          label="Tên"
          value={talent?.name}
          required
        ></InputWithLabel>

        <InputFile name="file" label="Hình đại diện"></InputFile>
        <div id="followers-error" aria-live="polite" aria-atomic="true">
          {formState.errors?.followers &&
            formState.errors.followers.map((error) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <InputWithLabel
          id="followers"
          name="followers"
          label="Lượng follow"
          value={talent?.Followers}
          required
        ></InputWithLabel>

        <div id="views-error" aria-live="polite" aria-atomic="true">
          {formState.errors?.views &&
            formState.errors.views.map((error) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <InputWithLabel
          id="views"
          name="views"
          label="Lượng view"
          value={talent?.views}
          required
        ></InputWithLabel>

        <InputWithLabel
          id="facebookUrl"
          name="facebookUrl"
          label="Link facebook"
          value={talent?.facebookUrl}
        ></InputWithLabel>
        <InputWithLabel id="xurl" name="xurl" label="Link X" value={talent?.xurl}></InputWithLabel>
        <InputWithLabel
          id="instagramUrl"
          name="instagramUrl"
          label="Link Instagram"
          value={talent?.instagramUrl}
        ></InputWithLabel>
        <InputWithLabel
          id="youtubeChannel"
          name="youtubeChannel"
          label="Link kênh youtube"
          value={talent?.youtubeChannel}
        ></InputWithLabel>
        <InputWithLabel
          id="websiteUrl"
          name="websiteUrl"
          label="Link website cá nhân"
          value={talent?.websiteUrl}
        ></InputWithLabel>
        <InputWithLabel
          id="threadUrl"
          label="Link Thread"
          value={talent?.threadUrl}
        ></InputWithLabel>
        <input id="talentInfo" name="talentInfo" value={contentStateRaw} type="hidden"></input>
        <RichTextEditor
          id="talentInfoRichTextEditor"
          name="talentInfoRichTextEditor"
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          label="Thông tin talent"
        />
        <div className="flex justify-end py-4 sm:hidden">
          <CancelButton href="/talents"></CancelButton>
          <SubmitButton label="Save"></SubmitButton>
        </div>
      </form>
    </>
  );
}
