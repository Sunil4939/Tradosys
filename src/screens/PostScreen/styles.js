import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
    },
    textBox:{
        marginHorizontal: width * .06,
        paddingHorizontal: width * .04,
        borderWidth:1,
        borderColor:'#E2E2E2',
        borderRadius:10,
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        marginBottom:-5,
        color: COLORS.black,
        textAlignVertical:'top',
    },
    bottomBar:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        borderWidth: 1, 
        borderColor: '#E2E2E2',
        width: width ,
        height: height * .06,
        backgroundColor: COLORS.white,
    },
    inputText:{
        width: width * .7,
        paddingHorizontal: width * .06,
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        marginBottom:-5,
        color: COLORS.black,
    },
    Btn:{
        width: width * .1, 
        height: height * .06,
         alignItems: 'center',
        justifyContent:'center', 
    },
    gallery:{
        width: width * .07,
        height: height * .035,
    },
    map:{
        width: width * .05,
        height: height * .036,
    },
})