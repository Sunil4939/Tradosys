import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
    },
    box:{
        marginHorizontal: width * .04,
        marginTop: height * .02,
    },
    row:{
        flexDirection:'row',
        // borderWidth:1,/
        // justifyContent:'space-between',
        // marginTop: height * .02,
        // marginBottom: height * .03,
    },
    bagBtn:{
        width: width * .14,
        height: height * .07,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F6F6F6',
        marginRight: width * .04,
    },
    bag:{
        width: width * .09,
        height: height * .045,
    },
    textBox:{
        width: width * .74,
        borderBottomWidth:2,
        borderBottomColor:'#E8E8E8',
    },
    title:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black,
        paddingBottom: 5,
    },
    subtitle:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 12,
        lineHeight: 15,
        color: '#A09C9C',
    },
    productContainer:{
        marginVertical: height * .01,
    },
    titleBox:{
        marginVertical: height * .02,
    },
    serviceTitle:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 15,
        lineHeight: 20,
        color: COLORS.black,
        marginHorizontal: width * .1,
    },
})