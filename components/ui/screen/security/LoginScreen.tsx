import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import {COLORS} from "@/constants/CollorPallet";
import {Icon, TextInput} from "react-native-paper";
import {useEffect, useState} from "react";
import axios from "axios";
import getBaseUrl from "@/constants/BASEURL";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { GoogleAuthProvider, signInWithCredential, User } from 'firebase/auth';
import { auth } from './firebaseConfig';

const logo = require('../../../../assets/images/logo/logo-wattpad.png');
export default function LoginScreen({navigation}: any) {
    const [email, setEmail] = useState('');
    const [passwordDisplayState, setPasswordDisplayState] = useState(false);
    const [password, setPassword] = useState('');

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '746493555001-pb684ejcvtcqg24vhhbrmp6tnh5h4bkd.apps.googleusercontent.com',
        androidClientId: 'YOUR_ANDROID_CLIENT_ID.apps.googleusercontent.com',
        iosClientId: 'YOUR_IOS_CLIENT_ID.apps.googleusercontent.com',
        webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
    });

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                navigation.navigate('ProductUpload');
            }
        };
        checkToken();
    }, []);

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${getBaseUrl()}users/login`, {
                username: email,
                password
            });
            if (response.data.token) {
                await AsyncStorage.setItem('token', response.data.token);
                await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
                navigation.navigate('ProductUpload');
            }
        } catch (e) {
            console.log(e);
        }
    }

    const [googleToken, setGoogleToken] = useState<string | null>(null);

    // Google login config (Use your Google credentials here)

    WebBrowser.maybeCompleteAuthSession();
    // Handle Google login response
    const handleGoogleLogin = async () => {
        try {
            const result = await promptAsync();

            if (result.type === 'success') {
                const { id_token } = result.params;

                // Sign in with Firebase using the Google ID token
                const credential = GoogleAuthProvider.credential(id_token);
                const firebaseUser = await signInWithCredential(auth, credential);

                const user = firebaseUser.user;

                // Send user email to backend to login/register and get JWT
                const res = await axios.post(`${getBaseUrl()}users/auth/google`, {
                    username: user.email,
                    displayName: user.displayName
                });

                await AsyncStorage.setItem('token', res.data.token);
                await AsyncStorage.setItem('user', JSON.stringify(res.data.user));

                navigation.navigate('Process');
            } else {
                console.log('Google login cancelled');
            }
        } catch (err) {
            console.error('Google login error:', err);
        }
    };

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
                <TouchableOpacity
                    onPress={() => navigation.navigate('ChangePassword')}
                    style={styles.forgotPasswordButton}>
                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleLogin()}
                    style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.separateText}>OR</Text>
                <View style={styles.socialLoginWrapper}>
                    <TouchableOpacity
                        onPress={()=>handleGoogleLogin()}
                        style={styles.iconOuter}>
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
                <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}
                    style={{...styles.loginButton, backgroundColor: COLORS.primary}}>
                    <Text style={styles.loginText}>Register with the email</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    iconOuter: {
        backgroundColor: COLORS.darkGray,
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    socialLoginWrapper: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-around'
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