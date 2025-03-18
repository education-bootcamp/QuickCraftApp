import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import ReturnScreen from "@/components/ui/screen/other/orders/ReturnScreen";
import RefundScreen from "@/components/ui/screen/other/orders/RefundScreen";
import MyOrderScreen from "@/components/ui/screen/other/orders/MyOrderScreen";

const TopTab = createMaterialTopTabNavigator();
export default function MyOrdersTopTabNavigator() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name={'MyOrder'} options={{title:'My Orders'}} component={MyOrderScreen}/>
            <TopTab.Screen name={'Return'} component={ReturnScreen}/>
            <TopTab.Screen name={'Refund'} component={RefundScreen}/>
        </TopTab.Navigator>
    )
}
