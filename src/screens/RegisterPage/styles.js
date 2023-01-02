import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
        paddingHorizontal: width * .04,
    },
    textBox: {
        marginVertical: height * .02,
        marginHorizontal: width * .02,
    },
    title: {
        fontFamily: 'Poppins Bold 700',
        fontSize: 25,
        lineHeight: 30,
        color: '#1A1D1E',
    },
    text: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: '#6A6A6A',
        marginTop: height * .01,
    },
    inputBox: {
        marginVertical: height * .01,
    },
    input: {
        backgroundColor: COLORS.white,
        color: '#3C3C43',
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        borderRadius: 12,
        height: height * .07,
        paddingLeft: width * .11,
    },
    mail: {
        width: width * .05,
        height: height * .024,
        position: 'absolute',
        top: height * .02,
        left: width * .025,
    },
    lock: {
        width: width * .05,
        height: height * .029,
        position: 'absolute',
        top: height * .016,
        left: width * .025,
    },
    show: {
        width: width * .08,
        height: height * .023,
    },
    showBtn: {
        width: width * .14,
        height: height * .07,
        position: 'absolute',
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    loginBtn: {
        marginVertical: height * .03,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: width * .1,
        height: 3,
        backgroundColor: '#9E9E9E',

    },
    orText: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: '#6A6A6A',
        marginHorizontal: width * .03,
    },
    row1: {
        width: width * .5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: width * .17,
        marginTop:height * .04,
        marginBottom:height * .06,
    },
    socialBtn: {
        width: width * .14,
        height: height * .07,
        backgroundColor: COLORS.darkBlue,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:16,
        elevation:2,
    },
    google:{
        width: width * .08,
        height: height * .04,
    },
    facebook:{
        width: width * .035,
        height: height * .035,
    },
    userTxt:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 20,
        color: '#6A6A6A',
    },
    accountTxt:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 20,
        color: '#1A1D1E',
    },
})