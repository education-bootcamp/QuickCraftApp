import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Searchbar} from "react-native-paper";
import {useEffect, useState} from "react";
import DisplayTypeWidget from "@/components/ui/screen/share/DisplayTypeWidget";
import ProductGridViewWidget from "@/components/ui/screen/home/widget/ProductGridViewWidget";
import ProductListViewWidget from "@/components/ui/screen/home/widget/ProductListViewWidget";
import axios from "axios";
import getBaseUrl from "@/constants/BASEURL";

export default function HomeProductsScreen({navigation}:any) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isGridEnabled, setIsGridEnabled] = useState(true);
    const [products, setProducts] = useState([]);

    const fetchAllProducts = async ()=>{
        try{
            const response= await axios.get(`${getBaseUrl()}products/find-all`);
            console.log(response);
            setProducts(response.data);
        }catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchAllProducts();
    }, []);

    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search products"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            <DisplayTypeWidget callback={(state:boolean)=>setIsGridEnabled(state)}/>

            {isGridEnabled?(
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {products.map((data,index)=>(
                        <ProductGridViewWidget
                            key={index}
                            data={data}
                            navigation={navigation}/>
                    ))}
                </ScrollView>
            ):(
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {products.map((data,index)=>(
                        <ProductListViewWidget key={index} data={data} navigation={navigation}/>
                    ))}

                </ScrollView>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
})