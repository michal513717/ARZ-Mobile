import { useState } from "react";
import { setDoc, doc, CollectionReference } from "firebase/firestore";

const useFirestoreSave = (collectionRef: CollectionReference) => {
  const [saving, setSaving] = useState(false);

  const saveData = async (data: any) => {
    setSaving(true);
    try {
      await setDoc(doc(collectionRef), data);
    } catch (error) {
      alert("Error saving data: " + error);
    } finally {
      setSaving(false);
    }
  };

  return saveData;
};

export default useFirestoreSave;
