// upload.ts
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../security/firebaseConfig';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

export const pickAndUploadImages = async (): Promise<string[]> => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
        alert('Permission to access gallery is required!');
        return [];
    }

    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        allowsMultipleSelection: true,  // Allow multiple images to be selected
    });

    if (result.canceled || !result.assets) {
        return [];
    }

    const imageUrls: string[] = [];

    // Loop through each selected image and upload
    for (const imageAsset of result.assets) {
        console.log(imageAsset.uri)
        const response = await fetch(imageAsset.uri);
        const blob = await response.blob();

        const filename = `uploads/${uuidv4()}`;
        const fileRef = ref(storage, filename);

        await uploadBytes(fileRef, blob);
        const url = await getDownloadURL(fileRef);
        imageUrls.push(url);
    }

    return imageUrls;
};
