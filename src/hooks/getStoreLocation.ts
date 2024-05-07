import AsyncStorage from "@react-native-async-storage/async-storage";

const getStoreLocation = async () => {
  try {
    let storedRegion = await AsyncStorage.getItem("cachedRegion");
    if (storedRegion) {
      return JSON.parse(storedRegion);
    } else {
      return null;
    }
  } catch (error) {
    alert("Error: " + error.message);
  }
};

export default getStoreLocation;
