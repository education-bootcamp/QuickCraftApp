import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeMenuScreen from "@/components/ui/screen/home/HomeMenuScreen";
import HomeCartScreen from "@/components/ui/screen/home/HomeCartScreen";
import HomePageScreen from "@/components/ui/screen/home/HomePageScreen";
import HomeBookmarkScreen from "@/components/ui/screen/home/HomeBookmarkScreen";
import HomeProductsScreen from "@/components/ui/screen/home/HomeProductsScreen";

const Tab = createBottomTabNavigator();
export default function HomeBottomTabNavigation({navigation}:any){
    return(
        <Tab.Navigator>
            <Tab.Screen name={'Menu'} component={HomeMenuScreen}/>
            <Tab.Screen name={'Cart'} component={HomeCartScreen}/>
            <Tab.Screen name={'Home'} component={HomePageScreen}/>
            <Tab.Screen name={'Bookmarks'} component={HomeBookmarkScreen}/>
            <Tab.Screen name={'Products'} component={HomeProductsScreen}/>
        </Tab.Navigator>
    )
}