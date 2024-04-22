import { getTalentById } from "@/app/services/actions/talents";
import FormEditTalent from "./formEdit";
import FormProfilePicure from "./formProfilePicure";

export default async function TalentDetail({ params }) {
  const data = await getTalentById(params?.id);

  return (
    <div className="flex flex-col gap-2">
      <FormProfilePicure talent={data}></FormProfilePicure>
      <FormEditTalent talent={data}></FormEditTalent>
    </div>
  );
}
