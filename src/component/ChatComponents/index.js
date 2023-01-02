import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions, View, Image, TextInput } from "react-native";
import { COLORS, icons } from "../../constants";
const { width, height } = Dimensions.get('window')

const Date = ({ date, style }) => {
    return (
        <View style={styles.dateContainer}>
            <View style={styles.dateBox}>
                <Text style={styles.dateText}>{date}</Text>
            </View>
        </View>
    )
}

const SendMessage = ({ message, boxStyle, link, textStyle, time, onPress }) => {
    return (
        <View style={styles.sendMessageContainer}>
            <View style={[styles.sendMessageBox, boxStyle]}>
                <View>
                    {link &&
                        <TouchableOpacity>
                            <Text style={[styles.link, textStyle]}>{link}</Text>
                        </TouchableOpacity>
                    }
                    <Text style={[styles.messageText, textStyle]}>{message}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.time}>{time}</Text>
                    <Image source={icons.db_right} style={styles.db_right} resizeMode="contain" />
                </View>
            </View>
        </View>
    )
}

const ReceiveMessage = ({ message, boxStyle, link, textStyle, time, onPress }) => {
    return (
        <View style={styles.receiveMessageContainer}>
            <View style={[styles.receiveMessageBox, boxStyle]}>
                <View>
                    {link &&
                        <TouchableOpacity>
                            <Text style={[styles.link, textStyle]}>{link}</Text>
                        </TouchableOpacity>
                    }
                    <Text style={[styles.receiveMessageText, textStyle]}>{message}</Text>
                </View>
                <Text style={styles.receiveTime}>{time}</Text>
            </View>
        </View>
    )
}



export {
    Date,
    SendMessage,
    ReceiveMessage,
}

const styles = StyleSheet.create({
    dateBox: {
        width: width * .35,
        height: height * .03,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
        borderRadius: 7,
        marginVertical: height * .01,
    },
    dateText: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 11,
        lineHeight: 15,
        color: '#8097A1',
    },
    db_right: {
        width: width * .05,
        height: height * .025,
        marginHorizontal: width * .01,
    },
    dateContainer: {
        alignItems: 'center',
    },
    receiveMessageContainer: {
        marginHorizontal: width * .04,
    },
    sendMessageContainer: {
        alignItems: 'flex-end',
        marginHorizontal: width * .04,
    },
    sendMessageBox: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: width * .74,
        paddingVertical: height * .01,
        paddingHorizontal: width * .03,
        marginVertical: height * .005,
        borderRadius: 10,
        backgroundColor: '#E5F9F5',
    },
    receiveMessageBox: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: width * .5,
        paddingVertical: height * .01,
        paddingHorizontal: width * .03,
        marginVertical: height * .005,
        borderRadius: 10,
        backgroundColor: COLORS.white,
    },
    messageText: {
        width: width * .52,
        fontFamily: 'Poppins Regulr 400',
        fontSize: 14,
        lineHeight: 15,
        color: COLORS.black,
    },
    receiveMessageText: {
        width: width * .35,
        fontFamily: 'Poppins Regulr 400',
        fontSize: 14,
        lineHeight: 15,
        color: COLORS.black,
    },
    link: {
        width: width * .54,
        fontFamily: 'Poppins Regulr 400',
        fontSize: 14,
        lineHeight: 15,
        color: '#1FA2FF',
    },
    row: {
        width: width * .11,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * -.01,
    },
    time: {
        fontFamily: 'Poppins Regulr 400',
        fontSize: 10,
        lineHeight: 12,
        color: '#999999',
    },
    receiveTime: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: width * -.01,
        marginBottom: height * -.007,
        fontFamily: 'Poppins Regulr 400',
        fontSize: 10,
        lineHeight: 12,
        color: '#999999',
    },

})