import { isUserAuthenticated } from "@/lib/firebase/firebaseAdmin";
import SignInComponent from "@/ui/signin"; 
import { redirect } from "next/navigation";

export default async function SignInPage() {

  const isAuthenticated = await isUserAuthenticated();
  console.log(isAuthenticated);

  if (isAuthenticated) redirect("/dashboard");

  return <SignInComponent></SignInComponent>
}
