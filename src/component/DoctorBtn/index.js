import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions, View, Image } from "react-native";
import { COLORS, icons } from "../../constants";
const { width, height } = Dimensions.get('window')



const DoctorBtn = ({ data, iconStyle, onPress, }) => {
    return (
        <TouchableOpacity style={styles.buttons} onPress={onPress}>
            <View style={styles.iconBox}>
                <Image source={data.icon} style={[styles.icons, iconStyle]} resizeMode="contain" />
            </View>
            <View style={styles.textBox}>
                <Text style={styles.labels}>{data.title}</Text>
                <Image source={icons.rightArrow} style={styles.rightArrow} resizeMode="contain" />
            </View>
        </TouchableOpacity>
    )
}
export default DoctorBtn;

const styles = StyleSheet.create({

    buttons: {
        flexDirection: 'row',
        alignItems:'center',
        marginHorizontal: width * .03,
        marginVertical: height * .01,
    },
    iconBox: {
        width: width * .1,
        height: height * .05,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: width * .01,
    },
    labels: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color:'#B1B1B1',
    },
   
    icons: {
        width: width * .06,
        height: height * .03,
    },
    rightArrow: {
        width: width * .04,
        height: height * .02,
        tintColor: '#AEAEAE',
    },
    textBox: {
        width: width * .8,
        height: height * .05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        // paddingLeft: width * .03,
    },

})