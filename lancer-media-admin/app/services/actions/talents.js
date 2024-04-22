"use server";

import { callAPI, postFormToAPI } from "./common";
import { APIMethod, FormStateMessage } from "../enum";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { TalentSchema } from "../validateSchema";
import { revalidatePath } from "next/cache";
import { redirect, notFound } from "next/navigation";

export const getTalents = async () => {
  try {
    const { accessToken } = await getAccessToken();
    let data = await callAPI(accessToken, APIMethod.GET, "talents");
    return data;
  } catch (error) {
    //return { message: "API Error: Failed to Get Talents" };
    console.error("System Error:", error);
    throw new Error("API Error: Failed to Get Talents");
  }
};

export const getTalentById = async (talentId) => {
  try {
    const { accessToken } = await getAccessToken();
    let data = await callAPI(accessToken, APIMethod.GET, `talents/${talentId}`);

    if (!data) {
      notFound();
    }

    return data;
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to Get Talent");
  }
};

export const createTalent = async (prevState, formData) => {

  let data = {
    name: formData.get("name"),
    followers: formData.get("followers") * 1,
    views: formData.get("views") * 1,
    talentInfo: formData.get("talentInfo"),
    file: formData.get("file"),
    facebookUrl: formData.get("facebookUrl"),
    xurl: formData.get("xurl"),
    instagramUrl: formData.get("instagramUrl"),
    youtubeChannel: formData.get("youtubeChannel"),
    websiteUrl: formData.get("websiteUrl"),
    threadUrl: formData.get("threadUrl"),
  };  

  const validatedFields = TalentSchema.safeParse(data);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Error: Failed to Create Talent.",
    };
  }
  const { accessToken } = await getAccessToken();
  try {

    let formDataPost = new FormData();
    formDataPost.append("name", data.name);
    formDataPost.append("Followers", data.followers);
    formDataPost.append("Views", data.views);
    formDataPost.append("TalentInfo", data.talentInfo);
    formDataPost.append("FacebookUrl", data.facebookUrl);
    formDataPost.append("Xurl", data.xurl);
    formDataPost.append("InstagramUrl", data.instagramUrl);
    formDataPost.append("YoutubeChannel", data.youtubeChannel);
    formDataPost.append("WebsiteUrl", data.websiteUrl);
    formDataPost.append("ThreadUrl", data.threadUrl);
    formDataPost.append("File", data.file);

    let result = await postFormToAPI(accessToken, APIMethod.POST, "talents", formDataPost);    
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to Create Talent");
  }

  revalidatePath("/rooms");
  redirect("/rooms");
};

export const updateProfilePicture = async (prevState, formData) => {

  let data = {
    id: formData.get("id"),
    file: formData.get("file"),
  };
  const { accessToken } = await getAccessToken();
  try {

    let formDataPost = new FormData();
    formDataPost.append("File", data.file);

    let result = await postFormToAPI(accessToken, APIMethod.PUT, `talents/UpdateProfilePicture/${data.id}`, formDataPost);

    return {
      errors: {},
      message: FormStateMessage.SUCCESS,
    };
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to Create Talent");
  }
};

export const updateTalent = async (prevState, formData) => {
  let data = {
    id: formData.get("id"),
    name: formData.get("name"),
    followers: formData.get("followers") * 1,
    views: formData.get("views") * 1,
    talentInfo: formData.get("talentInfo"),
    facebookUrl: formData.get("facebookUrl"),
    xurl: formData.get("xurl"),
    instagramUrl: formData.get("instagramUrl"),
    youtubeChannel: formData.get("youtubeChannel"),
    websiteUrl: formData.get("websiteUrl"),
    threadUrl: formData.get("threadUrl"),
  };  

  const validatedFields = TalentSchema.safeParse(data);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Error: Failed to Update Talent.",
    };
  }

  const { accessToken } = await getAccessToken();
  try {
    let result = await callAPI(accessToken, APIMethod.PUT, `talents/${data.id}`, data);

    return {
      errors: {},
      message: FormStateMessage.SUCCESS,
    };
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to Update Talent");
  }
};

export const deleteTalent = async (id) => {
  const { accessToken } = await getAccessToken();
  try {
    await callAPI(accessToken, APIMethod.DELETE, `talents/${id}`);
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to delete Talent");
  }

  revalidatePath("/talents");
  redirect("/talents");
};
