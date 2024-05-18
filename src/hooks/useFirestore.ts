import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FIRESTORE_DB } from "../utils/firebase";

const useFirestore = (collectionName: string) => {
  const [documents, setDocuments] = useState([]);

  const fetchDocuments = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(FIRESTORE_DB, collectionName)
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
  }, [collectionName]);

  return documents;
};

export default useFirestore;
