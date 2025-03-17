import {View, Text, StyleSheet} from 'react-native';
import { Menu } from 'react-native-paper';
import {COLORS} from "@/constants/CollorPallet";
export default function HomeMenuScreen(){
    return(
        <View style={styles.container}>
            <Menu.Item leadingIcon="redo" onPress={() => {}} title="My Orders" />
            <Menu.Item leadingIcon="undo" onPress={() => {}} title="Settings" />
            <Menu.Item leadingIcon="content-cut" onPress={() => {}} title="Vouchers" />
            <Menu.Item leadingIcon="content-copy" onPress={() => {}} title="Daily Deals" />
            <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Notifications" />
            <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Latest Products" />
            <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Profile" />
            <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Customer Care" />
            <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Logout" />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.light
    }
})