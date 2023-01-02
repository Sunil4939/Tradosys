import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#747474',
        marginVertical: height * .02,
    },
    topBox: {
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 15,
        lineHeight: 18,
        color: '#3C3737',
    },
    title: {
        fontFamily: 'Poppins Bold 700',
        fontSize: 15,
        lineHeight: 18,
        color: COLORS.black,
    },
    inputBox: {
        marginVertical: height * .01,
        marginHorizontal: width * .04,
    },
    labels: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: '#6A6A6A',
        marginVertical: height * .012,
    },
    inputText: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 18,
        color: '#1A1D1E',
        borderWidth: 1,
        backgroundColor: COLORS.white,
        borderRadius: 9,
        borderColor: '#E2E2E2',
        height: height * .065,
        paddingLeft: width * .05,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    uploadText: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 18,
        color: '#6A6A6A',
        textAlign: 'center',
        marginVertical: height * .012,
    },
    inputText1: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 18,
        color: '#1A1D1E',
        borderWidth: 1,
        backgroundColor: COLORS.white,
        borderRadius: 9,
        borderColor: '#E2E2E2',
        width: width * .4,
        height: height * .065,
        textAlign: 'center',
    },

    row1: {
        height: height * .1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    docoumentBox: {
        borderWidth: 1,
        backgroundColor: COLORS.white,
        borderRadius: 9,
        borderColor: '#E2E2E2',
        height: height * .12,
    },

    file: {
        width: width * .05,
        height: height * .025,
        marginBottom: height * .02,
    },
    imgBox: {
        width: width * .92,
        height: height * .12,
        // borderWidth:1,
    },
    imgStyle: {
        width: width * .92,
        height: height * .117,
        // marginBottom: height * .02,
    },
    serviceContainer: {
        borderWidth: 1,
        backgroundColor: COLORS.white,
        borderRadius: 9,
        borderColor: '#E2E2E2',
        height: height * .15,
    },
    text1: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 16,
        color: '#3C3737',
    },
    title1: {
        fontFamily: 'Poppins Bold 700',
        fontSize: 14,
        lineHeight: 16,
        marginBottom:-2,
        color: COLORS.black,
    },
    textBox:{
        marginVertical: height * .02,
        marginHorizontal: width * .04,
        alignItems: 'flex-start',
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#747474',
        
    },
    radioBox: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabelTxt: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },
    radioBtn:{
        width: width * .04,
        height: height * .02,
    },
    rightText: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 16,
        color: COLORS.black,
        textAlign:'right'
    },
    applyBtn:{
        marginHorizontal: width * .04,
        marginVertical: height * .04,
        backgroundColor:'#BABABA',
    }
})