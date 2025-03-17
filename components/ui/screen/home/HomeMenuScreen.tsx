import {View, Text, StyleSheet} from 'react-native';
export default function HomeMenuScreen(){
    return(
        <View style={styles.container}>
            <Text>Home Menu Screen</Text>
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