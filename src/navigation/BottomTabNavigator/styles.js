import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    tabBarStyle:{
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: COLORS.white,
        // elevation: 10,
    },
    home:{
        width: width * .05,
        height:height * .03,
        tintColor:  '#999898',
    },
    category:{
        width: width * .05,
        height:height * .025,
    },
    addPost:{
        width: width * .06,
        height:height * .033,
    },
    suscrbtion:{
        width: width * .06,
        height:height * .03,
    },
    profile:{
        width: width * .056,
        height:height * .03,
    },

   
  })