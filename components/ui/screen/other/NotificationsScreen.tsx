import {View, Text, StyleSheet} from 'react-native';
export default function NotificationsScreen(){
    return(
        <View style={styles.container}>
            <Text>Notifications Screen</Text>
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