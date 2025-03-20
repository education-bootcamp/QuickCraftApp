import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS} from "@/constants/CollorPallet";
import {Icon} from "react-native-paper";

export default function ProductGridViewWidget({navigation}:any) {
    return (
        <TouchableOpacity
            onPress={()=>navigation.navigate('ProductDetails')}
            style={styles.container}>
            <View style={styles.imageView}>
                <TouchableOpacity style={styles.bookmarkButton}>
                    <Icon size={20} source={'heart-outline'} color={COLORS.light}/>
                </TouchableOpacity>
                <Image
                    source={{uri: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg'}}
                    style={styles.image} resizeMode={'contain'}/>
            </View>
            <View>
                <Text style={styles.name}>Product Photos, Download The BEST Free Product Stock Photos & HD Images</Text>
                <Text style={styles.price}>LKR 150,000</Text>
                <Text style={styles.qty}>QTY : 15</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    bookmarkButton: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        top:10,
        zIndex:1
    },
    qty: {
        textAlign: 'right'
    },
    price: {
        color: COLORS.orange,
        fontWeight: 'bold',
        fontSize: 20
    },
    name: {
        fontSize: 20,
        lineHeight: 20,
        marginTop: 5
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 12
    },
    imageView: {
        backgroundColor: COLORS.light,
        padding: 3
    },
    container: {
        width: '100%',
        padding: 8,
        backgroundColor: COLORS.darkGray,
        borderRadius: 5,
        marginBottom: 5
    }
})