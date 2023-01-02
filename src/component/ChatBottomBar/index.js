import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions, View, Image, TextInput } from "react-native";
import { COLORS, icons } from "../../constants";
const { width, height } = Dimensions.get('window')


const ChatBottomBar = ({placeholder}) => {
    return (
        <View style={styles.bottomBar}>
            <View style={styles.inputTextBox}>
                <TouchableOpacity style={styles.smileyBtn}>
                    <Image source={icons.smiley} style={styles.smiley} resizeMode="contain" />
                </TouchableOpacity>
                <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={'#686868'} />
                <TouchableOpacity style={styles.btn}>
                    <Image source={icons.paper_clip} style={styles.smiley} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cameraBtn}>
                    <Image source={icons.camera} style={styles.camera} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.assistantBtn}>
                <Image source={icons.assistant} style={styles.assistant} resizeMode="contain" />
            </TouchableOpacity>
        </View>
    )
}

export default ChatBottomBar;

const styles = StyleSheet.create({
    bottomBar: {
        marginHorizontal: width * .02,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    smiley: {
        width: width * .06,
        height: height * .03,
    },
    assistant: {
        width: width * .06,
        height: height * .03,
    },
    camera: {
        width: width * .06,
        height: height * .03,
        marginRight: width * .02,
    },
    smileyBtn: {
        width: width * .1,
        height: height * .06,
        borderBottomLeftRadius:50,
        borderTopLeftRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraBtn: {
        width: width * .12,
        height: height * .06,
        borderBottomEndRadius:50,
        borderTopEndRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: width * .1,
        height: height * .06,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: width * .5,
        fontFamily: 'Poppins Regular 400',
        fontSize: 16,
        lineHeight: 18,
        marginBottom:-8,
        color: COLORS.black2,
    },
    inputTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * .82,
        height: height * .06,
        borderRadius: 50,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: '#979797',
    },
    assistantBtn: {
        width: width * .12,
        height: height * .06,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4CA6A8',
    },

})