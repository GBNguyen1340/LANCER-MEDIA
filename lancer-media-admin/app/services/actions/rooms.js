"use server";

import { callAPI, postFormToAPI } from "./common";
import { APIMethod, FormStateMessage } from "../enum";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { RoomSchema } from "../validateSchema";
import { revalidatePath } from "next/cache";
import { redirect, notFound } from "next/navigation";

export const getRooms = async () => {
  try {
    const { accessToken } = await getAccessToken();
    let data = await callAPI(accessToken, APIMethod.GET, "rooms");
    return data;
  } catch (error) {
    //return { message: "API Error: Failed to Get Rooms" };
    console.error("System Error:", error);
    throw new Error("API Error: Failed to Get Rooms");
  }
};

export const getRoomById = async (roomId) => {
  try {
    const { accessToken } = await getAccessToken();
    let data = await callAPI(accessToken, APIMethod.GET, `rooms/${roomId}`);

    if (!data) {
      notFound();
    }

    return data;
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to Get Room");
  }
};

export const getRoomPhoto = async (roomId) => {
  try {
    const { accessToken } = await getAccessToken();
    let data = await callAPI(accessToken, APIMethod.GET, `rooms/GetRoomPhoto/${roomId}`);
    return data;
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to Get Room");
  }
};

export const uploadRoomPhoto = async (prevState, formData) => {
  let data = {
    id: formData.get("id"),
    file: formData.get("file"),
  };

  if (!data.file || data.file.size <= 0) {
    return {
      errors: "Cần chọn hình ảnh để upload",
      message: "Error: Error when upload photo.",
    };
  }
  const { accessToken } = await getAccessToken();
  try {
    let formDataPost = new FormData();
    formDataPost.append("File", data.file);

    let result = await postFormToAPI(
      accessToken,
      APIMethod.PUT,
      `rooms/UploadRoomPhoto/${data.id}`,
      formDataPost
    );

  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to Create Blog");
  }

  revalidatePath("/")
};

export const createRoom = async (prevState, formData) => {
  let data = {
    name: formData.get("name"),
    description: formData.get("description"),
    type: formData.get("type"),
    price: formData.get("price") * 1, // *1 to convert string to number
  };

  const validatedFields = RoomSchema.safeParse(data);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Error: Failed to Create Room.",
    };
  }
  const { accessToken } = await getAccessToken();
  try {
    let result = await callAPI(accessToken, APIMethod.POST, "rooms", data);
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to Create Room");
  }

  revalidatePath("/rooms");
  redirect("/rooms");
};

export const updateRoom = async (prevState, formData) => {
  let data = {
    id: formData.get("id"),
    name: formData.get("name"),
    description: formData.get("description"),
    type: formData.get("type"),
    price: formData.get("price") * 1, // *1 to convert string to number
  };

  const validatedFields = RoomSchema.safeParse(data);

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Error: Failed to Update Room.",
    };
  }

  const { accessToken } = await getAccessToken();
  try {
    let result = await callAPI(accessToken, APIMethod.PUT, `rooms/${data.id}`, data);

    return {
      errors: {},
      message: FormStateMessage.SUCCESS,
    };
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to Update Room");
  }
};

export const deleteRoom = async (id) => {
  const { accessToken } = await getAccessToken();
  try {
    await callAPI(accessToken, APIMethod.DELETE, `rooms/${id}`);
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to delete Room");
  }

  revalidatePath("/rooms");
  redirect("/rooms");
};

export const deletePhoto = async (id) => {
  const { accessToken } = await getAccessToken();
  try {
    await callAPI(accessToken, APIMethod.DELETE, `rooms/DeletePhotoRoom/${id}`);
  } catch (error) {
    console.error("System Error:", error);
    throw new Error("API Error: Failed to delete Room");
  }

  revalidatePath("/");
};
