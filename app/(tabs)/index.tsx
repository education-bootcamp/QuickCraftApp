import {Image, StyleSheet, View, Text, Platform} from 'react-native';
import {useState} from "react";
import SplashScreen from "@/components/ui/screen/SplashScreen";
import Dashboard from "@/components/ui/screen/Dashboard";


export default function HomeScreen() {
    const [isLoading, setIsLoading]=useState(true);
    return (
        <View style={styles.container}>
            {isLoading?(
                <SplashScreen onFinish={()=>{setIsLoading(false)}} />
            ):(
                <Dashboard/>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
