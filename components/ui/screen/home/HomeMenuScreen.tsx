import {View, Text, StyleSheet} from 'react-native';
import { Menu } from 'react-native-paper';
import {COLORS} from "@/constants/CollorPallet";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function HomeMenuScreen({navigation}:any){

    const logout = async ()=>{
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user');
        navigation.navigate('Login');
    }

    return(
        <View style={styles.container}>
            <Menu.Item leadingIcon="receipt" onPress={() => navigation.navigate('MyOrder')} title="My Orders" />
            <Menu.Item leadingIcon="cog" onPress={() => navigation.navigate('Settings')} title="Settings" />
            <Menu.Item leadingIcon="gift" onPress={() => navigation.navigate('Voucher')} title="Vouchers" />
            <Menu.Item leadingIcon="tag" onPress={() => navigation.navigate('DailyDeals')} title="Daily Deals" />
            <Menu.Item leadingIcon="bell" onPress={() => navigation.navigate('Notifications')} title="Notifications" />
            <Menu.Item leadingIcon="star" onPress={() => navigation.navigate('LatestProducts')} title="Latest Products" />
            <Menu.Item leadingIcon="account" onPress={() => navigation.navigate('Profile')} title="Profile" />
            <Menu.Item leadingIcon="headset" onPress={() => navigation.navigate('CustomerCare')} title="Customer Care" />
            <Menu.Item leadingIcon="exit-to-app" onPress={logout} title="Logout" />

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.light
    }
})