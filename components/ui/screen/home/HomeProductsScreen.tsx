import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Searchbar} from "react-native-paper";
import {useState} from "react";
import DisplayTypeWidget from "@/components/ui/screen/share/DisplayTypeWidget";
import ProductGridViewWidget from "@/components/ui/screen/home/widget/ProductGridViewWidget";
import ProductListViewWidget from "@/components/ui/screen/home/widget/ProductListViewWidget";

export default function HomeProductsScreen({navigation}:any) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isGridEnabled, setIsGridEnabled] = useState(true);
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
                    <ProductGridViewWidget navigation={navigation}/>
                </ScrollView>
            ):(
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <ProductListViewWidget navigation={navigation}/>
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