import {View, Text, StyleSheet} from 'react-native';
export default function HomeProductsScreen(){
    return(
        <View style={styles.container}>
            <Text>Home Products Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})