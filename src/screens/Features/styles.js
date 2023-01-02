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
        paddingTop: height * .01,
        borderWidth:1,
        borderColor:'#E2E2E2',
        borderRadius:10,
    },
    inputText:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 12,
        lineHeight: 16,
        marginBottom:-5,
        color: COLORS.black,
        textAlignVertical:'top',
    },
    length:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 12,
        lineHeight: 16,
        color: '#BFBFBF',
        marginVertical: height * .02,
        textAlign:'right',
    },
    text:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 10,
        lineHeight: 16,
        marginBottom:-5,
        color: '#B6ABAB',
        textAlign:'center',
        marginHorizontal: width * .06,
        marginVertical: height * .02,
    },
    Btn:{
       backgroundColor:'#C7C7C7',
       marginHorizontal: width * .06,
       marginTop: height * .1,
    },
  
})