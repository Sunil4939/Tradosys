import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
    },
    profileContainer:{
        alignItems:'center',
        paddingVertical:height * .01,
        borderBottomLeftRadius: height * .04,
        borderBottomRightRadius: height * .04,
        overflow:'hidden',
    },
    profileBox:{
        width: width * .28,
        height:height * .15, 
        borderRadius:30,
    },
    profileImage1:{
        width: width * .28,
        height:height * .15,  
        borderRadius:25,
    },
    editBtn:{
        width: width * .06,
        height:height * .03,  
        borderRadius:50,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:COLORS.blue2,
        justifyContent:'center',
        alignItems:'center',
    },
    edit:{
        width: width * .03,
        height:height * .015,  
    },
    name:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 24,
        lineHeight: 28,
        color: COLORS.black2,
        marginTop: height * .01,
        textAlign: 'center',
    },
    text:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 16,
        color: '#6A6A6A',
        textAlign: 'center',
        marginTop: height * .005,
    },
    logoutBtn:{
        width: width * .2,
        height:height * .04,  
        position:'absolute',
        right: 0,
        top: height * .01,
        justifyContent:'center',
        alignItems:'center',
    },
    logout:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 16,
        lineHeight: 20,
        color: '#03686A',
        textAlign: 'center',
    },
    NavigateContainer:{
        marginTop: height * .04,
    },
    addPost:{
        tintColor: '#857A7A',
    },
})