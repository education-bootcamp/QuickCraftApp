import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS} from "@/constants/CollorPallet";

export default function ReviewWidget() {
    return (
        <View style={{backgroundColor:COLORS.gray, padding:5, borderRadius:3, marginBottom:5}}>
            <Text style={{textAlign:'justify'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos facilis nobis placeat tempora voluptate.
                Accusantium dolorem doloremque, doloribus eos eveniet itaque laboriosam laborum, nam nostrum numquam
                perferendis, perspiciatis reprehenderit vitae.
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonBar: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        width: 35,
        height: 35,
        borderRadius: 50,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.primary
    },
    bookmarkButton: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 1
    },
    qty: {
        textAlign: 'right'
    },
    price: {
        color: COLORS.orange,
        fontWeight: 'bold',
        fontSize: 20
    },
    name: {
        fontSize: 20,
        lineHeight: 20,
        marginTop: 5
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 12
    },
    imageView: {
        backgroundColor: COLORS.light,
        padding: 3
    },
    container: {
        width: '100%',
        padding: 8,
        backgroundColor: COLORS.darkGray,
        borderRadius: 5,
        marginBottom: 5
    }
})