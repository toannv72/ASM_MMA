import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { storage } from "../configs/firebase";



export const firebaseImg = async (image) => {
    const pathParts = image.assets[0].uri?.split('/');
    const fileName = pathParts[pathParts.length - 1];
    if (image) {
      const imageRef = ref(storage, `images/${fileName}`);
      // Upload image to Firebase Storage
      await uploadBytes(imageRef, await fetch(image.assets[0].uri).then((res) => res.blob()));
      // Get the download URL of the image
      const imageUrl = await getDownloadURL(imageRef);
      return imageUrl;
    }
    return null;
};
