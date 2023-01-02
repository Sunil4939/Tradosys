import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions, View, Image, TextInput } from "react-native";
import { COLORS, icons } from "../../constants";
const { width, height } = Dimensions.get('window')

const Services = ({ serviceName, style }) => {
    return (
            <View style={[styles.serviceBox, style]}>
                <Text style={styles.serviceText}>{serviceName}</Text>
                <TouchableOpacity style={styles.closeBtn}>
                <Image source={icons.close} style={styles.close} resizeMode="contain" />
                </TouchableOpacity>
            </View>
        
    )
}

export {
    Services,
}

const styles = StyleSheet.create({
    serviceBox: {
        width: width * .5,
        // height: height * .03,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        borderRadius: 7,
        paddingHorizontal: width * .02,
        paddingVertical: height * .006,
        marginTop: height * .01,
        marginHorizontal: width * .04,
    },
    serviceText: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 12,
        lineHeight: 15,
        color: COLORS.black,
        marginBottom: -3,
    },
    closeBtn: {
        width: width * .05,
        height: height * .025,
        marginLeft: width * .02,
        alignItems: 'center',
        justifyContent: 'center',
    },
    close: {
        width: width * .04,
        height: height * .02,
    },
    dateContainer: {
        alignItems: 'center',
    },
  

})