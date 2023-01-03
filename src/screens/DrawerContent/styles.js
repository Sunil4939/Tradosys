import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    imgBox: {
        width: width * .18,
        height: height * .09,
        borderRadius: 50,
    },
    profileImage: {
        width: width * .18,
        height: height * .09,
    },
    rightArrow: {
        width: width * .04,
        height: height * .02,
    },
    rightArrowBox: {
        marginLeft: width * .04,
        marginBottom: 4,
    },
    profileBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: height * .04,
        paddingHorizontal: width * .03,
        // backgroundColor: COLORS.blue2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightBox: {
        marginTop: height * .01,
        marginLeft: width * .03,
    },
    name: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 24,
        lineHeight: 28,
        color: COLORS.black,
    },
    text: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 11,
        lineHeight: 14,
        color: '#6A6A6A',
    },
    buttonContainer: {
        marginHorizontal: width * .02,
        marginHorizontal: width * .03,
    },
    user_fill: {
        width: width * .06,
        height: height * .03,
        tintColor: COLORS.white,
    },
    brand: {
        width: width * .05,
        height: height * .025,
    },
    category: {
        width: width * .04,
        height: height * .02,
        tintColor: COLORS.white,
    },
    star: {
        width: width * .05,
        height: height * .025,
    },
    privacy: {
        width: width * .07,
        height: height * .035,
    },
    condition: {
        width: width * .06,
        height: height * .03,
    },
    contact: {
        width: width * .05,
        height: height * .025,
    },
})