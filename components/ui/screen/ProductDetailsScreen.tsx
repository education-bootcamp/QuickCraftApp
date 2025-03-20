import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Icon, Searchbar} from "react-native-paper";
import {useState} from "react";
import DisplayTypeWidget from "@/components/ui/screen/share/DisplayTypeWidget";
import ProductGridViewWidget from "@/components/ui/screen/home/widget/ProductGridViewWidget";
import ProductListViewWidget from "@/components/ui/screen/home/widget/ProductListViewWidget";
import CartListViewWidget from "@/components/ui/screen/home/widget/CartListViewWidget";
import CartGridViewWidget from "@/components/ui/screen/home/widget/CartGridViewWidget";
import {COLORS} from "@/constants/CollorPallet";
import ReviewWidget from "@/components/ui/screen/home/widget/ReviewWidget";

export default function ProductDetailsScreen() {
    const productImages = [
        {uri: 'https://wish.lk/wp-content/uploads/2024/09/iPhone-16-Pro2.png'},
        {uri: 'https://d1ugx7ghroxfae.cloudfront.net/products/thumbnails/VVPHY034128GBGGRN.webp'},
        {uri: 'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/Apple%20i%20phone%20Red--1693475773.jpg'}
    ];
    const [primaryImage, setPrimaryImage] = useState(productImages[0].uri);
    const [status, setStatus] = useState(true);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.top}>
                <View style={styles.imageBg}>
                    <Image source={{uri: primaryImage}}
                           style={styles.image} resizeMode={'contain'}/>
                </View>
                <View style={styles.productImageList}>
                    {productImages.map((item, index) => (
                        <TouchableOpacity
                            key={index} style={{width: 80, height: 60, borderWidth: 1, borderRadius: 5}}
                            onPress={() => setPrimaryImage(item.uri)}
                        >
                            <Image source={{uri: item.uri}}
                                   style={styles.displayImage} resizeMode={'contain'}/>
                        </TouchableOpacity>
                    ))}
                </View>

            </View>
            <View style={{}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 5}}>iPhone 14 Plus 128GB RED MOBILE PHONE |
                    MySoftlogic.lk</Text>
                <Text style={{}}>The Lenovo™ Tab M8, your best companion device with stunning performance and stylish
                    design. The device that everyone wants to have.</Text>
                <View style={{marginTop: 10, flexDirection: 'row'}}>
                    <Text style={{color: COLORS.orange, fontWeight: 'bold', fontSize: 15, marginRight: 10}}>2500
                        UAD</Text>
                    <Text style={{
                        color: COLORS.orange,
                        fontWeight: 'bold',
                        fontSize: 15,
                        textDecorationLine: 'line-through'
                    }}>3000 UAD</Text>
                </View>
            </View>
            <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <TouchableOpacity style={{...styles.btn, backgroundColor: COLORS.primary, marginRight: 10}}>
                    <Icon size={20} source={'cart'} color={COLORS.light}/>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.btn, backgroundColor: COLORS.blue}}>
                    <Text style={{color: COLORS.light}}>Buy Now</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tab}>
                <TouchableOpacity
                    onPress={()=>setStatus(true)}
                    style={{...styles.tabButton, backgroundColor:status?COLORS.primary:COLORS.light}}>
                    <Text style={{color:status?COLORS.light:COLORS.primary}}>Reviews</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>setStatus(false)}
                    style={{...styles.tabButton, backgroundColor:status?COLORS.light:COLORS.primary}}>
                    <Text style={{color:status?COLORS.primary:COLORS.light}}>Recommended</Text>
                </TouchableOpacity>
            </View>
            {
                status?(
                    <View>
                        <ReviewWidget/>
                        <ReviewWidget/>
                        <ReviewWidget/>
                        <ReviewWidget/>
                    </View>
                ):(
                    <View>
                        <ProductListViewWidget/>
                        <ProductListViewWidget/>
                        <ProductListViewWidget/>
                        <ProductListViewWidget/>
                    </View>
                )
            }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    tabButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width:120
    },
    tab: {
        width: '100%',
        borderBottomWidth: 1,
        marginBottom:20,
        marginTop: 10,
        flexDirection: 'row'
    },
    btn: {
        width: 120,
        height: 35,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    displayImage: {
        width: '100%',
        height: '100%'
    },
    productImageList: {
        width: '100%',
        borderBottomWidth: 1,
        marginTop: 10,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 200
    },
    imageBg: {
        backgroundColor: COLORS.darkGray
    },
    top: {
        width: '100%',
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.light
    }
})