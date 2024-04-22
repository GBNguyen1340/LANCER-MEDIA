
import { getAccessToken } from "@auth0/nextjs-auth0";
import FormCreateTalent from "./formCreate";

export default async function TalentCreate({ params }) { 
  const data = {
    talentInfo: "",
  };
  const { accessToken } = await getAccessToken();
  return (
    <FormCreateTalent talent={data} accessToken={accessToken}></FormCreateTalent>
  );
}
