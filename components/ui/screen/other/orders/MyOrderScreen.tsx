import {View, Text, StyleSheet} from 'react-native';
export default function MyOrderScreen(){
    return(
        <View style={styles.container}>
            <Text>My Order Screen</Text>
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