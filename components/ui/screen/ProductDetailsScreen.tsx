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

export default function ProductDetailsScreen({navigation, route}:any) {
const {data}=route.params;
    const [primaryImage, setPrimaryImage] = useState(data.images[0]);
    const [status, setStatus] = useState(true);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.top}>
                <View style={styles.imageBg}>
                    <Image source={{uri: primaryImage}}
                           style={styles.image} resizeMode={'contain'}/>
                </View>
                <View style={styles.productImageList}>
                    {data.images.map((item, index) => (
                        <TouchableOpacity
                            key={index} style={{width: 80, height: 60, borderWidth: 1, borderRadius: 5}}
                            onPress={() => setPrimaryImage(item)}
                        >
                            <Image source={{uri: item}}
                                   style={styles.displayImage} resizeMode={'contain'}/>
                        </TouchableOpacity>
                    ))}
                </View>

            </View>
            <View style={{}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 5}}>{data.name}</Text>
                <Text style={{}}>{data.description}</Text>
                <View style={{marginTop: 10, flexDirection: 'row'}}>
                    <Text style={{color: COLORS.orange, fontWeight: 'bold', fontSize: 15, marginRight: 10}}>{data.actualPrice}
                        UAD</Text>
                    <Text style={{
                        color: COLORS.orange,
                        fontWeight: 'bold',
                        fontSize: 15,
                        textDecorationLine: 'line-through'
                    }}>{data.displayPrice} UAD</Text>
                </View>
            </View>
            <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <TouchableOpacity style={{...styles.btn, backgroundColor: COLORS.primary, marginRight: 10}}>
                    <Icon size={20} source={'cart'} color={COLORS.light}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Checkout',{amount:data.actualPrice})}
                    style={{...styles.btn, backgroundColor: COLORS.blue}}>
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