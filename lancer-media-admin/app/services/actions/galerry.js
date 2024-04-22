export const uploadFile = async (prevState, formData) => {
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