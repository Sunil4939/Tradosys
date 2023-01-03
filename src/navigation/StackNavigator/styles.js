import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    headerStyle: {
        backgroundColor: COLORS.blue2,
    },

    notification: {
        width: width * .07,
        height: height * .035,
    },
    menu: {
        width: width * .12,
        height: height * .038,
    },
    headerTitle: {
        fontFamily: "Poppins SemiBold 600",
        color: COLORS.white,
        fontSize: 18,
        lineHeight: 22,
        marginTop: 2,
    },
    headerTitle1: {
        fontFamily: "Poppins SemiBold 600",
        color: COLORS.black,
        fontSize: 18,
        lineHeight: 22,
        marginTop: 2,
    },

    headerRightBtn: {
        marginRight: width * .03,
    },
    rightRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    back: {
        width: width * .05,
        height: height * .025,
    },
    whiteLeft: {
        width: width * .05,
        height: height * .025,
        tintColor:COLORS.white,
    },
    headerBtn: {
        // borderWidth:1,
        width: width * .1,
        height: height * .05,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: width * .01,
    },
    headerRightBtn1: {
        marginRight: width * .03,
        backgroundColor: COLORS.white,
        elevation: 3,
        width: width * .1,
        height: height * .05,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
    },
    image1: {
        width: width * .1,
        height: height * .05,
    },
    left_arrow:{
        width: width * .06,
        height:height * .03,
    },
    dpBox:{
        width: width * .1,
        height: height * .05,
        borderRadius: 50,
        marginHorizontal: width * .01,
    },
    dp:{
        width: width * .1,
        height: height * .05,
    },
    leftRow:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: width * .01,
    },
    headerBtn2: {
        width: width * .1,
        height: height * .05,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: width * .01,
    },
    headerTitle2: {
        fontFamily: "Poppins SemiBold 600",
        color: COLORS.white,
        fontSize: 18,
        lineHeight: 22,
        marginTop: 2,
        marginLeft:-15,
    },
    call1: {
        width: width * .045,
        height: height * .023,
    },
    postBtn:{
        marginRight: width * .03,
        width: width * .2,
        height: height * .05,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
    },
    post:{
        fontFamily: "Poppins SemiBold 600",
        color: '#939393',
        fontSize: 18,
        lineHeight: 22,
        marginTop: 2,
    },
})