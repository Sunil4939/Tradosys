import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions, View, Image } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

const ButtonComponent = ({title, style, onPress }) => {
    return (
        <TouchableOpacity style={[styles.Btn, style]} onPress={onPress}>
            <Text style={styles.BtnTxt}>{title}</Text>
        </TouchableOpacity>
    )
}

const ScreenBtnComponent = ({ title, icon, iconStyle, onPress, bg }) => {
    return (
        <TouchableOpacity style={styles.buttons} onPress={onPress}>
            <View style={[styles.iconBox, {backgroundColor:bg }]}>
                <Image source={icon} style={[styles.icons,iconStyle]} resizeMode="contain" />
            </View>
            <Text style={styles.labels}>{title}</Text>
        </TouchableOpacity>
    )
}

export {
    ButtonComponent,
    ScreenBtnComponent
} 

const styles = StyleSheet.create({
    Btn:{
        backgroundColor: COLORS.blue2,
        height: height * .065,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
    },
    BtnTxt:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize:16,
        lineHeight:20,
        color:COLORS.white,
    },

    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: height * .01,
        borderBottomWidth: 1,
        borderBottomColor: '#EAEAEA',
        marginTop: height * .01,
    },
    iconBox: {
        width: width * .1,
        height: height * .05,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: width * .05,
    },
    labels: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black2,
    },
    icons: {
        width: width * .04,
        height: height * .02,
    },
 
})