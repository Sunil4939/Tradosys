import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
    },
    inputBox:{
        marginVertical: height * .01,
        marginHorizontal: width * .04,
    },
   labels:{
    fontFamily: 'Poppins Regular 400',
    fontSize: 14,
    lineHeight: 18,
    color: '#6A6A6A',
    marginVertical: height * .01,
   },
   inputText:{
    fontFamily: 'Poppins Medium 500',
    fontSize: 14,
    lineHeight: 18,
    color: '#1A1D1E',
    borderWidth:1,
    backgroundColor:COLORS.white,
    borderRadius:9,
    borderColor:'#E2E2E2',
    height: height * .065,
    paddingLeft: width * .05,
   },
   messagInputText:{
    fontFamily: 'Poppins Regular 400',
    fontSize: 12,
    lineHeight: 20,
    color: '#1A1D1E',
    borderWidth:1,
    backgroundColor:COLORS.white,
    borderRadius:9,
    borderColor:'#E2E2E2',
    paddingLeft: width * .05,
    textAlignVertical:'top',
   },
   profileContainer:{
    alignItems:'center',
    paddingVertical:height * .01,
    borderBottomLeftRadius: height * .04,
    borderBottomRightRadius: height * .04,
    overflow:'hidden',
},
imageBox:{
    width: width * .21,
    height:height * .11,   
    borderRadius:50,
    overflow:'hidden',
    marginVertical: height * .02,
},
profileImage1:{
    width: width * .21,
    height:height * .11,  
},
editBtn:{
    width: width * .06,
    height:height * .03,  
    borderRadius:50,
    position:'absolute',
    right:0,
    bottom:height * .02,
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
applyBtn:{
    width: width * .92,
    marginTop: height * .06,
    marginHorizontal: width * .04,
}
   
   
})