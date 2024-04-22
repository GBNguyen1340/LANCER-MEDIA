import FormEditBlog from "./formEdit";
import { getBlogById } from "@/app/services/actions/blogs";
import FormThumbnailPicture from "./formThumbnailPicture";

export default async function TalentDetail({ params }) {
  const data = await getBlogById(params?.id);

  return (
    <div className="flex flex-col gap-2">
      <FormThumbnailPicture blog={data}></FormThumbnailPicture>
      <FormEditBlog blog={data}></FormEditBlog>
    </div>
  );
}
