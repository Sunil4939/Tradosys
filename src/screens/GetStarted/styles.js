import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    imgBox: {
        alignItems: 'center',
    },
    getStart: {
        width: width * .9,
        height: height * .45,
    },
    textBox: {
        marginVertical: height * .07,
    },
    title: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 25,
        lineHeight: 30,
        color: '#1A1D1E',
        textAlign: 'center',
    },
    text: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: '#6A6A6A',
        textAlign: 'center',
        marginTop: height * .012,
    },
    btn: {
        backgroundColor: '#4CA6A8',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * .7,
        height: height * .06,
        borderRadius: 12,
        marginHorizontal: width * .15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 16,
        lineHeight: 20,
        color: COLORS.white,
    },
    arrow_right: {
        width: width * .05,
        height: height * .024,
        marginLeft: width * .02,
    },
})