import {createStackNavigator} from '@react-navigation/stack';
import HomeBottomTabNavigation from "@/app/navigation/tab-navigation/HomeBottomTabNavigation";
import CustomercareScreen from "@/components/ui/screen/other/CustomercareScreen";
import DailyDealsScreen from "@/components/ui/screen/other/DailyDealsScreen";
import LatestProductsScreen from "@/components/ui/screen/other/LatestProductsScreen";
import MyOrderScreen from "@/components/ui/screen/other/orders/MyOrderScreen";
import NotificationsScreen from "@/components/ui/screen/other/NotificationsScreen";
import ProfileScreen from "@/components/ui/screen/other/ProfileScreen";
import SettingsScreen from "@/components/ui/screen/other/SettingsScreen";
import VouchersScreen from "@/components/ui/screen/other/VouchersScreen";
import LoginScreen from "@/components/ui/screen/security/LoginScreen";
import MyOrdersTopTabNavigator from "@/app/navigation/tab-navigation/MyOrdersTopTabNavigator";
import SignupScreen from "@/components/ui/screen/security/SignupScreen";
import SignupVerifyEmailScreen from "@/components/ui/screen/security/SignupVerifyEmailScreen";
import ChangePasswordScreen from "@/components/ui/screen/security/ChangePasswordScreen";
import ResetPasswordVerifyEmailScreen from "@/components/ui/screen/security/ResetPasswordVerifyEmailScreen";
import ResetPasswordScreen from "@/components/ui/screen/security/ResetPasswordScreen";
import ProductDetailsScreen from "@/components/ui/screen/ProductDetailsScreen";

const Stack = createStackNavigator();
export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Process'}
                          options={{headerLeft: () => null, headerShown: false}}
                          component={HomeBottomTabNavigation}/>
            <Stack.Screen name={'CustomerCare'}
                          options={{title: 'Customer care'}}
                          component={CustomercareScreen}/>
            <Stack.Screen name={'DailyDeals'}
                          options={{title: 'Daily Deals'}}
                          component={DailyDealsScreen}/>
            <Stack.Screen name={'LatestProducts'}
                          options={{title: 'Latest Products'}}
                          component={LatestProductsScreen}/>
            <Stack.Screen name={'MyOrder'}
                          options={{title: 'My Order'}}
                          component={MyOrdersTopTabNavigator}/>
            <Stack.Screen name={'Notifications'}
                          options={{title: 'Notifications'}}
                          component={NotificationsScreen}/>
            <Stack.Screen name={'Profile'}
                          options={{title: 'Profile'}}
                          component={ProfileScreen}/>
            <Stack.Screen name={'Settings'}
                          options={{title: 'Settings'}}
                          component={SettingsScreen}/>
            <Stack.Screen name={'Voucher'}
                          options={{title: 'Vouchers'}}
                          component={VouchersScreen}/>
            <Stack.Screen name={'Login'}
                          options={{title: 'Login Here'}}
                          component={LoginScreen}/>
            <Stack.Screen name={'Signup'}
                          options={{title: 'Register Here'}}
                          component={SignupScreen}/>
            <Stack.Screen name={'SignupVerifyEmail'}
                          options={{title: 'Verify your email'}}
                          component={SignupVerifyEmailScreen}/>
            <Stack.Screen name={'ChangePassword'}
                          options={{title: 'Change Password'}}
                          component={ChangePasswordScreen}/>
            <Stack.Screen name={'ResetPasswordVerifyEmail'}
                          options={{title: 'Verify Email'}}
                          component={ResetPasswordVerifyEmailScreen}/>
            <Stack.Screen name={'ResetPassword'}
                          options={{title: 'Reset Password'}}
                          component={ResetPasswordScreen}/>
                <Stack.Screen name={'ProductDetails'}
                          options={{title: 'Product Details'}}
                          component={ProductDetailsScreen}/>

        </Stack.Navigator>
    )
}