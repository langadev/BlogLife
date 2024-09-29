
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDiZXIfIEyRoQRuqrFirLqga4S-GRVfxU",
  authDomain: "fotonode-7321d.firebaseapp.com",
  projectId: "fotonode-7321d",
  storageBucket: "fotonode-7321d.appspot.com",
  messagingSenderId: "823311479704",
  appId: "1:823311479704:web:7b26f1c036b877b900f1ed",
  measurementId: "G-EF5N74Y6E8"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);