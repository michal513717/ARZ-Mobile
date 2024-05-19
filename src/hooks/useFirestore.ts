import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FIRESTORE_DB } from "../utils/firebase";

const useFirestore = (collectionPath: string) => {
  const [documents, setDocuments] = useState([]);

  const fetchDocuments = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(FIRESTORE_DB, collectionPath)
      );
      const fetchedDocuments = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDocuments(fetchedDocuments);
    } catch (error) {
      alert("Error fetching documents: " + error);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, [collectionPath]);

  return documents;
};

export default useFirestore;
