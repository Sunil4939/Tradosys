import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions, View, Image } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

const Notification = ({ data, onPress, }) => {
    return (
        <TouchableOpacity style={styles.buttons} onPress={onPress}>
            <View style={styles.profileBox}>
                <Image source={data.profile} style={styles.profile} resizeMode="contain" />
               {data.status === 'Online' && 
                <View style={styles.status}></View>
                }
            </View>
            <View style={styles.textBox}>
                <View style={styles.midBox}>
                <Text style={styles.labels}>{data.name}</Text>
                <Text style={styles.subtitle}>{data.message}</Text>
                </View>
            <View style={styles.rightBox}>
                <Text style={styles.time}>{data.time}</Text>
               {data.totalNotification && 
               <View style={styles.totalBtn}>
               <Text style={styles.count}>{data.totalNotification}</Text>
               </View>
               }
            </View>
            </View>
        </TouchableOpacity>
    )
}

export {
    Notification,
}

const styles = StyleSheet.create({

    buttons: {
        flexDirection: 'row',
        height: height * .11,
        paddingVertical: height * .01,
        marginTop: height * .012,
        marginHorizontal: width * .03,
    },
    profileBox: {
        width: width * .12,
        height: height * .06,
        backgroundColor: '#F6F6F6',
        borderRadius: 50,
        // borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: width * .03,
    },
    profile: {
        width: width * .12,
        height: height * .06,
    },
    status:{
        width: 9,
        height: 9,
        borderWidth:1,
        position:'absolute',
        right: width * .01,
        bottom:0,
        borderColor: COLORS.white,
        borderRadius:50,
        backgroundColor: COLORS.green,
    },
    labels: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black2,
    },
    subtitle: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 11,
        lineHeight: 14,
        color: '#8C8C8C',
        marginTop: 2,
    },
    textBox: {
        width: width * .78,
        flexDirection:'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        paddingBottom: height * .02,
    },
    midBox:{
        width: width * .58,
    },
    time: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 10,
        lineHeight: 14,
        color: '#8C8C8C',
        marginTop: 2,
    },
    totalBtn:{
        width: width * .06,
        height: height * .03,
        backgroundColor: '#0082CD',
        borderRadius: 50,
        // borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    count:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 12,
        lineHeight: 14,
        color: COLORS.white,
        marginBottom:-3,
    },
    rightBox:{
        width: width * .2,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },

})