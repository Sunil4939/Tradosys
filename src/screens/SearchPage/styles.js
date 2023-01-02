import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingVertical: height * .02,
        paddingHorizontal: width * .04,
    },
    search:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:COLORS.white,
        elevation:5,
        borderRadius:10,
    },
    searchIcon:{
        width: width * .05,
        height: height * .025,
    },
    Btn:{
        width: width * .12,
        height: height * .06,
        alignItems:'center',
        justifyContent:'center',
    },
   
    searchText:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 15,
        color: COLORS.black, 
        width: width * .65,
        height: height * .06, 
        padding:0,
        paddingLeft: width * .04,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    adjustBtn:{
        width: width * .12,
        height: height * .06,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:COLORS.blue2,
    },
    productContainer:{
        marginTop: height * .04,
    },


    
   
    btn:{
        width: width * .34,
        height: height * .07,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:COLORS.white,
        borderWidth:1,
        borderColor:'#E1E1E1',
    },
    btnTxt:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black2,
        marginTop:3,
    },
    ModalContainer:{
        justifyContent: 'flex-start',
        alignItems:'flex-end',
    },
    sort:{
        width: width * .04,
        height: height * .02,
    },
    filter:{
        width: width * .04,
        height: height * .021,
    },
    sortIconBox:{
        width: width * .06,
        height: height * .03,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal: width * .03,
    },
})