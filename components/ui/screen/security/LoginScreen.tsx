import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import {COLORS} from "@/constants/CollorPallet";
import {Icon, TextInput} from "react-native-paper";
import {useState} from "react";

const logo = require('../../../../assets/images/logo/logo-wattpad.png');
export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [passwordDisplayState, setPasswordDisplayState] = useState(false);
    const [password, setPassword] = useState('');
    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image source={logo} style={styles.logo} resizeMode={'contain'}/>
            </View>
            <View style={styles.inputOuter}>
                <View style={styles.formGroup}>
                    <TextInput
                        label="Root Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        label="Password"
                        secureTextEntry={!passwordDisplayState}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        right={<TextInput.Icon onPress={() => {
                            setPasswordDisplayState(!passwordDisplayState)
                        }} size={20} icon={passwordDisplayState ? 'eye' : 'eye-off'}/>}
                    />
                </View>
                <TouchableOpacity style={styles.forgotPasswordButton}>
                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.separateText}>OR</Text>
                <View style={styles.socialLoginWrapper}>
                    <TouchableOpacity style={styles.iconOuter}>
                        <Icon size={20} source={'google'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconOuter}>
                        <Icon size={20} source={'facebook'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconOuter}>
                        <Icon size={20} source={'twitter'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconOuter}>
                        <Icon size={20} source={'github'}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{...styles.loginButton,backgroundColor:COLORS.primary}}>
                    <Text style={styles.loginText}>Register with the email</Text>
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