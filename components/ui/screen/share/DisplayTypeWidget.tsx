import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from "react-native-paper";
import {COLORS} from "@/constants/CollorPallet";
import {useState} from "react";

export default function DisplayTypeWidget() {
    const [gridState, setGridState]=useState(true);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={()=>setGridState(true)}
                style={{...styles.button, backgroundColor:gridState?COLORS.blue:COLORS.darkGray}}>
                <Icon size={20} source={'grid'} color={gridState?COLORS.light:COLORS.blue}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>setGridState(false)}
                style={{...styles.button, backgroundColor:gridState?COLORS.darkGray:COLORS.blue}}>
                <Icon size={20} source={'menu'} color={gridState?COLORS.blue:COLORS.light}/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        marginTop: 10,
        flexDirection:'row',
        justifyContent:'flex-end'
    }
})