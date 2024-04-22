import { z } from "zod";

export const RoomSchema = z.object({
  name: z.string(),
  description: z.string(),
  type: z.enum(["PHONG_TRON", "PHONG_XANH", "PHONG_LED"], {
    invalid_type_error: "Cần xác định loại phòng.",
  }),
  price: z.number({
    invalid_type_error: "Giá tiền phải là số.",
  }),
});

export const TalentSchema = z.object({
  name: z.string(),
  talentInfo: z.string(),
  followers: z.number({
    invalid_type_error: "Chỉ được nhập số.",
  }),
  views: z.number({
    invalid_type_error: "Chỉ được nhập số.",
  }),
  facebookUrl: z.string(),
  instagramUrl: z.string(),
  youtubeChannel: z.string(),
  websiteUrl: z.string(),
  xurl: z.string(),
  threadUrl: z.string(),
  talentInfo: z.string(),
});

export const BlogSchema = z.object({
  title: z.string().max(300, { message: "Chỉ được nhập tối đa 300 kí tự" }),
  summary: z.string().max(3000, { message: "Chỉ được nhập tối đa 3000 kí tự" }),
});