import "server-only";

import { cookies } from "next/headers";
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

export const firebaseAdminConfig = {
  type: process.env.NEXT_ADM_FIREBASE_TYPE,
  project_id: process.env.NEXT_ADM_FIREBASE_PROJECT_ID,
  private_key_id: process.env.NEXT_ADM_FIREBASE_PRIVATE_KEY_ID.replace(/\\n/gm, "\n"),
  private_key: process.env.NEXT_ADM_FIREBASE_PRIVATE_KEY,
  client_email: process.env.NEXT_ADM_FIREBASE_CLIENT_EMAIL,
  client_id: process.env.NEXT_ADM_FIREBASE_CLIENT_ID,
  auth_uri: process.env.NEXT_ADM_FIREBASE_AUTH_URI,
  token_uri: process.env.NEXT_ADM_FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.NEXT_ADM_FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.NEXT_ADM_FIREBASE_CLIENT_X509_CERT_URL,
  universe_domain: process.env.NEXT_ADM_FIREBASE_UNIVERSE_DOMAIN,
};

// Initialize Firebase
export const firebaseApp =
  getApps().find((it) => it.name === "firebase-admin-app") ||
  initializeApp(
    {
      credential: cert(firebaseAdminConfig),
    },
    "firebase-admin-app"
  );
export const auth = getAuth(firebaseApp);

export async function isUserAuthenticated(session) {
  const _session = session ?? (await getSession());
  if (!_session) return false;

  try {
    const isRevoked = !(await auth.verifySessionCookie(_session, true));
    return !isRevoked;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getCurrentUser() {
  const session = await getSession();

  if (!(await isUserAuthenticated(session))) {
    return null;
  }

  const decodedIdToken = await auth.verifySessionCookie(session);
  const currentUser = await auth.getUser(decodedIdToken.uid);

  return currentUser;
}

async function getSession() {
  try {
    return cookies().get("__session")?.value;
  } catch (error) {
    return undefined;
  }
}

export async function createSessionCookie(idToken, sessionCookieOptions) {
  return auth.createSessionCookie(idToken, sessionCookieOptions);
}

export async function revokeAllSessions(session) {
  const decodedIdToken = await auth.verifySessionCookie(session);

  return await auth.revokeRefreshTokens(decodedIdToken.sub);
}
