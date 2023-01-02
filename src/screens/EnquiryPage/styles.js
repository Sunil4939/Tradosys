import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
    },
    enquiryContainer:{
        marginTop: height * .03,
    },
    text:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 12,
        lineHeight: 15,
        color: '#524343',
    },
})