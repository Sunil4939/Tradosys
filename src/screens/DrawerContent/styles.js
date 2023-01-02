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
        marginBottom: 4,
        marginRight:  -3,
    },
    profileBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: height * .04,
        paddingHorizontal: width * .03,
        // backgroundColor: COLORS.blue2,
    },
    row: {
        width: width * .48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rightBox: {
        width: width * .48,
        marginTop: height * .01,
        marginLeft: width * .06,
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