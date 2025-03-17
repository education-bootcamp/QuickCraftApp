import {createStackNavigator} from '@react-navigation/stack';
import HomeBottomTabNavigation from "@/app/navigation/tab-navigation/HomeBottomTabNavigation";
import CustomercareScreen from "@/components/ui/screen/other/CustomercareScreen";
import DailyDealsScreen from "@/components/ui/screen/other/DailyDealsScreen";
import LatestProductsScreen from "@/components/ui/screen/other/LatestProductsScreen";
import MyOrderScreen from "@/components/ui/screen/other/MyOrderScreen";
import NotificationsScreen from "@/components/ui/screen/other/NotificationsScreen";
import ProfileScreen from "@/components/ui/screen/other/ProfileScreen";
import SettingsScreen from "@/components/ui/screen/other/SettingsScreen";
import VouchersScreen from "@/components/ui/screen/other/VouchersScreen";
import LoginScreen from "@/components/ui/screen/security/LoginScreen";
const Stack = createStackNavigator();
export default function StackNavigator(){
return(
    <Stack.Navigator>
        <Stack.Screen name={'Process'}
                      options={{headerLeft:()=>null, headerShown:false}}
                      component={HomeBottomTabNavigation}/>
        <Stack.Screen name={'CustomerCare'}
                      options={{title:'Customer care'}}
                      component={CustomercareScreen}/>
        <Stack.Screen name={'DailyDeals'}
                      options={{title:'Daily Deals'}}
                      component={DailyDealsScreen}/>
        <Stack.Screen name={'LatestProducts'}
                      options={{title:'Latest Products'}}
                      component={LatestProductsScreen}/>
        <Stack.Screen name={'MyOrder'}
                      options={{title:'My Order'}}
                      component={MyOrderScreen}/>
        <Stack.Screen name={'Notifications'}
                      options={{title:'Notifications'}}
                      component={NotificationsScreen}/>
        <Stack.Screen name={'Profile'}
                      options={{title:'Profile'}}
                      component={ProfileScreen}/>
        <Stack.Screen name={'Settings'}
                      options={{title:'Settings'}}
                      component={SettingsScreen}/>
        <Stack.Screen name={'Voucher'}
                      options={{title:'Vouchers'}}
                      component={VouchersScreen}/>
        <Stack.Screen name={'Login'}
                      options={{title:'Login Here'}}
                      component={LoginScreen}/>
    </Stack.Navigator>
)
}