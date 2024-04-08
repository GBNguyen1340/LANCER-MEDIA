"use server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createSessionCookie, revokeAllSessions } from "@/lib/firebase/firebaseAdmin";
import { auth } from "./firebase"; 
import { cookies } from "next/headers";

export async function signIn(_currentState, formData) {
  try {
    let email = formData.get("email");
    let password = formData.get("password");
    let userCredential = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await userCredential.user.getIdToken();

    // LOG_WILL_REMOVE
    console.log("idToken:", idToken);

    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

    const sessionCookie = await createSessionCookie(idToken, { expiresIn });

    cookies().set("__session", sessionCookie, {
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
    });

    return true;

  } catch (error) {
    if (error) {
      console.error(error);
      return "Invalid credentials.";
    }
    throw error;
  }
}

export async function signOut() {
  try {
    console.log("signing out...");
    const cert = await auth.signOut();

    console.log("sign out result:", cert);
    const sessionCookie = cookies().get("__session")?.value;
    if (!sessionCookie) return { success: false, error: "Session not found." }, { status: 400 };
    cookies().delete("__session");

    await revokeAllSessions(sessionCookie);
    return { success: true, data: "Signed out successfully." };
  } catch (error) {
    console.error("Sign out error", error);
  }
}

export async function getCurrentUser() {
  const user = auth.currentUser;

  console.log("user login: ", user);

  return user;
}