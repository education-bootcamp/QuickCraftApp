import {createStackNavigator} from '@react-navigation/stack';
import HomeBottomTabNavigation from "@/app/navigation/tab-navigation/HomeBottomTabNavigation";
const Stack = createStackNavigator();
export default function StackNavigator(){
return(
    <Stack.Navigator>
        <Stack.Screen name={'Process'} component={HomeBottomTabNavigation}/>
    </Stack.Navigator>
)
}