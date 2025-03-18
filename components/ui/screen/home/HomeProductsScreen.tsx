import {View, Text, StyleSheet} from 'react-native';
import {Searchbar} from "react-native-paper";
import {useState} from "react";
import DisplayTypeWidget from "@/components/ui/screen/share/DisplayTypeWidget";
export default function HomeProductsScreen(){
    const [searchQuery, setSearchQuery]= useState('');
    return(
        <View style={styles.container}>
            <Searchbar
                placeholder="Search products"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            <DisplayTypeWidget/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    }
})