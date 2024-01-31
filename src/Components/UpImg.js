import React, { useEffect, useState } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { firebaseImg } from '../api/firebaseImg';
import { postData } from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [image123, setImage123] = useState(null);
  const [storedData, setStoredData] = useState([]);

  // console.log(11111111112, storedData[0].id);

  useEffect(() => {
    const loadStoredData = async () => {
      try {
        // Load data from AsyncStorage
        const data = await AsyncStorage.getItem('@myKey');
        if (data !== null) {
          setStoredData(JSON.parse(data));
          // console.log('Data User successfully:', data);
        } else {
          console.log('No data found in AsyncStorage.');
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadStoredData();

  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      // Upload image to Firebase Storage
      // gọi thằng firebaseImg để đẩy ảnh lên xong rồi lấy đường dẫn của ảnh đó 

      const response = await firebaseImg(result);
      setImage(response);
    }
  };
  postData(`/pets/CreatePet/${storedData[0]?.id}`, {
    "name": "string",
    "species": "string",
    "imagePet": "string",
    "birthDate": "2024-01-30T14:19:15.828Z",
    "gender": 0,
    "weight": 0
  })
    .then((e) => {
      console.log(123123123,e);
    })




  // const firebaseImg = async (image) => {
  //   const pathParts = image.assets[0].uri?.split('/');
  //   const fileName = pathParts[pathParts.length - 1];
  //   if (image) {
  //     const imageRef = ref(storage, `images/${fileName}`);
  //     // Upload image to Firebase Storage
  //     await uploadBytes(imageRef, await fetch(image.assets[0].uri).then((res) => res.blob()));
  //     // Get the download URL of the image
  //     const imageUrl = await getDownloadURL(imageRef);
  //     return imageUrl;
  //   }
  //   return null;
  // };


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image nè ." onPress={pickImage} />
      {image123 && <Image source={{ uri: image123 }} style={{ width: 250, height: 250 }} />}
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
