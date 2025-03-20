import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import {COLORS} from "@/constants/CollorPallet";
import {Icon, TextInput} from "react-native-paper";
import {useState} from "react";

const logo = require('../../../../assets/images/logo/logo-wattpad.png');
export default function SignupVerifyEmailScreen({navigation}:any) {
    const [otp, setOtp] = useState('');
    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image source={logo} style={styles.logo} resizeMode={'contain'}/>
            </View>
            <View style={styles.inputOuter}>
                <View style={styles.formGroup}>
                    <TextInput
                        label="OTP"
                        value={otp}
                        keyboardType={'decimal-pad'}
                        onChangeText={text => setOtp(text)}
                    />
                </View>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Signup')}
                    style={styles.forgotPasswordButton}>
                    <Text style={styles.forgotPasswordText}>Change Email</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{}}
                    style={styles.forgotPasswordButton}>
                    <Text style={styles.forgotPasswordText}>(30) Resend email</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Process')}
                    style={styles.loginButton}>
                    <Text style={styles.loginText}>Verify</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    iconOuter: {
        backgroundColor: COLORS.darkGray,
        width:50,
        height:50,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    socialLoginWrapper: {
        flexDirection: 'row',
        marginTop:20,
        justifyContent:'space-around'
    },
    separateText: {
        textAlign: 'center',
        marginTop: 50
    },
    loginText: {
        color: COLORS.light
    },
    loginButton: {
        backgroundColor: COLORS.blue,
        height: 50,
        marginTop: 30,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    forgotPasswordText: {
        color: COLORS.blue,
        textDecorationLine: 'underline'
    },
    forgotPasswordButton: {
        alignItems: 'flex-end'
    },
    formGroup: {
        marginBottom: 10
    },
    inputOuter: {
        marginTop: 50
    },
    logo: {
        width: 200,
        height: 60
    },
    logoWrapper: {
        alignItems: "center",
        marginTop: 20
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.light
    }
})