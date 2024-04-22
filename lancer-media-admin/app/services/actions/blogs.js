"use server";

import { callAPI, createTimeId, postFormToAPI } from "./common";
import { APIMethod, FormStateMessage } from "../enum";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { BlogSchema } from "../validateSchema";
import { revalidatePath } from "next/cache";
import slugify from "@sindresorhus/slugify";
import { notFound, redirect } from "next/navigation";

export const getBlogs = async () => {
  const { accessToken } = await getAccessToken();
  try {
    let data = await callAPI(accessToken, APIMethod.GET, "blogs");
    return data;
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to Get Blogs");
  }
};

export const getBlogById = async (id) => {
  const { accessToken } = await getAccessToken();
  try {
    let data = await callAPI(accessToken, APIMethod.GET, `contents/${id}`);
    if (!data) {
      notFound();
    }
    return data;
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to Get Blogs");
  }
};

export const getBlogBySlug = async (slug) => {
  const { accessToken } = await getAccessToken();
  try {
    let data = await callAPI(accessToken, APIMethod.GET, `blogs/${slug}`);
    return data;
  } catch (error) {
    return { message: "API Error: Failed to get Blog" };
  }
};

export const createBlog = async (prevState, formData) => {
  let data = {
    title: formData.get("title"),
    content: formData.get("content"),
    file: formData.get("file"),
    summary: formData.get("summary"),
    type: "Blog",
  };

  const validatedFields = BlogSchema.safeParse(data);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Error: Failed to Create Blog.",
    };
  }
  const { accessToken } = await getAccessToken();
  try {
    let formDataPost = new FormData();
    formDataPost.append("Title", data.title);
    formDataPost.append("FullContent", data.content);
    formDataPost.append("Summary", data.summary);
    formDataPost.append("Type", data.type);
    formDataPost.append("File", data.file);
    formDataPost.append("Slug", `${slugify(data.title)}${createTimeId()}`);

    let result = await postFormToAPI(accessToken, APIMethod.POST, "contents", formDataPost);
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to Create Blog");
  }

  revalidatePath("/blogs");
  redirect("/blogs");
};

export const updateThumbnailPicture = async (prevState, formData) => {
  let data = {
    id: formData.get("id"),
    file: formData.get("file"),
  };
  const { accessToken } = await getAccessToken();
  try {
    let formDataPost = new FormData();
    formDataPost.append("File", data.file);

    let result = await postFormToAPI(
      accessToken,
      APIMethod.PUT,
      `contents/UpdateThumbnailPicture/${data.id}`,
      formDataPost
    );
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to Create Blog");
  }

  revalidatePath("/");
};

export const updateBlog = async (prevState, formData) => {
  let data = {
    id: formData.get("id"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    fullContent: formData.get("content"),
    type: "Blog",
  };

  data.slug = `${slugify(data.title)}${createTimeId()}`;

  const validatedFields = BlogSchema.safeParse(data);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Error: Failed to Update Blog.",
    };
  }

  const { accessToken } = await getAccessToken();
  try {
    let result = await callAPI(accessToken, APIMethod.PUT, `contents/${data.id}`, data);

    return {
      errors: {},
      message: FormStateMessage.SUCCESS,
    };
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to Update Blog");
  }
};

export const deleteBlog = async (id) => {
  const { accessToken } = await getAccessToken();
  try {
    await callAPI(accessToken, APIMethod.DELETE, `contents/${id}`);
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to delete Blog");
  }

  revalidatePath("/blogs");
  redirect("/blogs");
};
