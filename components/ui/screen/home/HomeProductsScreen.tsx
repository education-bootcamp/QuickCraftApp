import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Searchbar} from "react-native-paper";
import {useState} from "react";
import DisplayTypeWidget from "@/components/ui/screen/share/DisplayTypeWidget";
import ProductGridViewWidget from "@/components/ui/screen/home/widget/ProductGridViewWidget";
import ProductListViewWidget from "@/components/ui/screen/home/widget/ProductListViewWidget";

export default function HomeProductsScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isGridEnabled, setIsGridEnabled] = useState(false);
    const manageGridView=({state}:any)=>{
        setIsGridEnabled(state);
        console.log(isGridEnabled);
    }
    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search products"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            <DisplayTypeWidget callBack={manageGridView}/>

            {isGridEnabled?(
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <ProductGridViewWidget/>
                    <ProductGridViewWidget/>
                    <ProductGridViewWidget/>
                    <ProductGridViewWidget/>
                    <ProductGridViewWidget/>
                </ScrollView>
            ):(
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <ProductListViewWidget/>
                    <ProductListViewWidget/>
                    <ProductListViewWidget/>
                    <ProductListViewWidget/>
                    <ProductListViewWidget/>
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