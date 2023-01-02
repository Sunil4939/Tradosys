import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: width * .04,
    },
    imgBox: {
        marginVertical: height * .04,
        alignItems: 'center',
    },
    verify: {
        width: width * .6,
        height: height * .4,
    },
    textBox: {
        marginHorizontal: width * .04,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black,
    },
    text: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: '#4E4D4D',
        marginTop: height * .01,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberTxt: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 12,
        lineHeight: 14,
        color: COLORS.black,
        marginBottom: -5,
    },

    OtpRow: {
        marginHorizontal: width * .1,
    },
    OtpinputBox: {
        height: height * .15,
    },

    boxstyle: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F6F6F6',
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
        padding: 0,
        backgroundColor: '#F6F6F6',
        elevation: 1,
    },
    digitStyle:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 16,  
        color: '#464646',
    },
   submitBtn:{
    marginVertical: height * .05,
   },
})