import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS} from "@/constants/CollorPallet";
import {Icon} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import getBaseUrl from "@/constants/BASEURL";

export default function ProductListViewWidget({navigation, data}:any) {
    const makeBookmark = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (!token) {
                alert('please login');
                return;
            }
            const response = await axios.post(`${getBaseUrl()}bookmarks/make-bookmark`, {
                productId: data._id, productName: data?.name
            }, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            console.log(response);
            alert('saved!');
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <TouchableOpacity
            onPress={()=>navigation.navigate('ProductDetails',{data:data})}
            style={styles.container}>
            <View style={styles.imageView}>
                <TouchableOpacity
                    onPress={() => {
                        makeBookmark()
                    }}
                    style={styles.bookmarkButton}>
                    <Icon size={20} source={'heart-outline'} color={COLORS.light}/>
                </TouchableOpacity>
                <Image
                    source={{uri: data.images[0]}}
                    style={styles.image} resizeMode={'contain'}/>
            </View>
            <View style={{flex:1, padding:5}}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.price}>{data.actualPrice}</Text>
                <Text style={styles.qty}>QTY : {data.qty}</Text>
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
        height:'100%'
    },
    imageView: {
        width:150,
        height:80,
        backgroundColor: COLORS.light,
        padding: 3
    },
    container: {
        width: '100%',
        padding: 8,
        backgroundColor: COLORS.darkGray,
        borderRadius: 5,
        marginBottom: 5,
        flexDirection:'row'
    }
})