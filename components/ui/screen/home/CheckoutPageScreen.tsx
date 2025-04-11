import {View, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';
import axios from "axios";
import getBaseUrl from "@/constants/BASEURL";
import React, {useEffect, useState} from "react";
import { WebView } from 'react-native-webview';
export default function CheckoutPageScreen({navigation,route}:any){
    const {amount}= route.params;
    const [checkoutUrl, setCheckoutUrl] = useState(null);

    useEffect(() => {
        const createCheckout = async () => {
            try {
                const response = await axios.post(`${getBaseUrl()}payments/payhere-checkout`, {
                    first_name: 'John',
                    last_name: 'Doe',
                    email: 'john@example.com',
                    phone: '0771234567',
                    address: 'Colombo 07',
                    city: 'Colombo',
                    amount: '2500.00',
                    order_id: 'ORD12345',
                });

                setCheckoutUrl(response.data.paymentUrl);
            } catch (error) {
                console.error('Failed to create PayHere checkout', error);
            }
        };

        createCheckout();
    }, []);

    if (!checkoutUrl) return <ActivityIndicator size="large" color="#000" />;
    return(
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: checkoutUrl }}
                startInLoadingState
                onNavigationStateChange={(navState) => {
                    if (navState.url.includes('payment-success')) {
                        alert('Payment successful!');
                    }
                    if (navState.url.includes('payment-cancel')) {
                        alert('Payment cancelled.');
                    }
                }}
            />
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