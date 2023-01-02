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
 
    applyBtn:{
        position:'absolute',
        width: width * .92,
        bottom: height * .02,
        marginHorizontal: width * .04,
    }
})