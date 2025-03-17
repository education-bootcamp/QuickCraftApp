import {View, Text, StyleSheet} from 'react-native';
export default function HomeBookmarkScreen(){
    return(
        <View style={styles.container}>
            <Text>Home Bookmark Screen</Text>
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