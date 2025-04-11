import {View, Text, StyleSheet,Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import {useState} from "react";
import axios from "axios";
import {pickAndUploadImages} from "@/components/ui/screen/other/orders/Upload";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getBaseUrl from "@/constants/BASEURL";
import {TextInput} from "react-native-paper";
interface Product {
    name: string;
    description: string;
    category: string;
    displayPrice: string;
    actualPrice: string;
    qty: string;
    brand: string;
    images: string[];
}
export default function ProductUploadScreen(){
    const [product, setProduct] = useState<Product>({
        name: '',
        description: '',
        category: '',
        displayPrice: '',
        actualPrice: '',
        qty: '',
        brand: '',
        images: [],
    });

    const handleInputChange = (name: string, value: string) => {
        setProduct({ ...product, [name]: value });
    };

    const handleImageUpload = async () => {
        const imageUrls = await pickAndUploadImages();
        setProduct({ ...product, images: imageUrls });
    };

    const handleSubmit = async () => {
        try {
            // Get the token from AsyncStorage (for authentication)
            const token = await AsyncStorage.getItem('token');

            // Send product data to the backend
            const response = await axios.post(
                `${getBaseUrl()}products/upload`,
                { ...product },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert('Product uploaded successfully!');
            setProduct({
                name: '',
                description: '',
                category: '',
                displayPrice: '',
                actualPrice: '',
                qty: '',
                brand: '',
                images: [],
            });
        } catch (error) {
            console.log(error);
            alert('Error uploading product');
        }
    };

    return(
        <ScrollView style={styles.container}>
            <View style={styles.formGroup}>
                <TextInput
                    label="Product Name"
                    value={product.name}
                    onChangeText={(text) => handleInputChange('name', text)}
                />
            </View>

            <View style={styles.formGroup}>
                <TextInput
                    label="Description"
                    value={product.description}
                    onChangeText={(text) => handleInputChange('description', text)}
                />
            </View>

            <View style={styles.formGroup}>
                <TextInput
                    label="Category"
                    value={product.category}
                    onChangeText={(text) => handleInputChange('category', text)}
                />
            </View>

            <View style={styles.formGroup}>
                <TextInput
                    label="Display Price"
                    keyboardType="numeric"
                    value={product.displayPrice}
                    onChangeText={(text) => handleInputChange('displayPrice', text)}
                />
            </View>

            <View style={styles.formGroup}>
                <TextInput
                    label="Actual Price"
                    keyboardType="numeric"
                    value={product.actualPrice}
                    onChangeText={(text) => handleInputChange('actualPrice', text)}
                />
            </View>

            <View style={styles.formGroup}>
                <TextInput
                    label="Quantity"
                    keyboardType="numeric"
                    value={product.qty}
                    onChangeText={(text) => handleInputChange('qty', text)}
                />
            </View>

            <View style={styles.formGroup}>
                <TextInput
                    label="Brand"
                    value={product.brand}
                    onChangeText={(text) => handleInputChange('brand', text)}
                />
            </View>

            {/* Image Upload */}
            <View style={styles.formGroup}>
                <TouchableOpacity onPress={handleImageUpload}  >
                    <Text>Upload Images</Text>
                </TouchableOpacity>

                <View style={styles.imagePreviewWrapper}>
                    {product.images.length > 0 && (
                        product.images.map((image, index) => (
                            <Image key={index} source={{ uri: image }} style={styles.imagePreview} />
                        ))
                    )}
                </View>
            </View>

            {/* Submit Button */}
            <View style={styles.formGroup}>
                <Button title="Submit Product" onPress={handleSubmit} />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
        container: { flex: 1, padding: 20 },
        formGroup: { marginBottom: 20 },
        imagePreviewWrapper: { flexDirection: 'row', flexWrap: 'wrap' },
        imagePreview: { width: 100, height: 100, margin: 5, borderRadius: 10 },
})