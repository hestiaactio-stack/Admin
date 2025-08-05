// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// Tu configuración real de Firebase (copiada de la consola)
const firebaseConfig = {
  apiKey: "AIzaSyCO9ReMLC3GwCiLdaUuqb0vsNyAjId1gxI",
  authDomain: "hestia-4b938.firebaseapp.com",
  projectId: "hestia-4b938",
  storageBucket: "hestia-4b938.firebasestorage.app",
  messagingSenderId: "718569699680",
  appId: "1:718569699680:web:2f36df0259fd884ccac605",
  measurementId: "G-DFJY2T6HH4"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Helper para saber si un uid está en la colección "admins"
export async function isAdmin(uid) {
  const adminDoc = await getDoc(doc(db, "admins", uid));
  return adminDoc.exists();
}
