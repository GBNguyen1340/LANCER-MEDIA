import FormCreateBlog from "./formCreate";
export default function CreateBlogs({params}) {

  let data = {
    id: params ?? "",
    title: "",
    slug: "",
    summary: "",
    content: "",
    type: "blog",
    thumbnailImgUrl: ""
  }

  return (
    <FormCreateBlog blog={data}></FormCreateBlog>
  );
}