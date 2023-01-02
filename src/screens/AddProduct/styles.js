import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    upload: {
        width: width * .1,
        height: height * .05,
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
    uploadText: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 14,
        lineHeight: 18,
        color: '#6A6A6A',
        textAlign: 'center',
        marginVertical: height * .012,
    },
    docoumentBox: {
        borderWidth: 1,
        backgroundColor: COLORS.white,
        borderRadius: 9,
        borderColor: '#E2E2E2',
        height: height * .1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgContainer:{
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E2E2E2',
        marginHorizontal: width * .04,
        overflow:'hidden',
        marginVertical: height * .05,
    },
    imageContent:{
        alignItems:'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
        paddingVertical: height * .01,
    },
    imgBox:{
        width: width * .92,
        height: height * .15,
        alignItems:'center',
        // borderWidth:1,
        marginVertical: height * .01,
    },
    imageStyle:{
        width: width * .8,
        height: height * .15,
    },
    name: {
        fontFamily: 'Poppins Bold 700',
        fontSize: 16,
        lineHeight: 20,
        color: COLORS.black,
        marginVertical: height * .012,
    },

    deleteBtn: {
        height: height * .065,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.white,
    },
    deleteText:{
        fontFamily: 'Poppins Bold 700',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.red,
    },
   
    Btn:{
        marginHorizontal: width * .04,
        marginVertical: height * .04,
    },
})