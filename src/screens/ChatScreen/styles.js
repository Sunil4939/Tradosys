import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
    },
    messageBox:{
        width: width * .4,
    },
    messageText:{
        width: width * .2,
    },
    receiveMessage:{
        width: width * .24,
    },


    text:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 12,
        lineHeight: 15,
        color: '#524343',
    }
})