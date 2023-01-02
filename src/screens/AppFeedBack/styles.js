import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
    },
    FeedBackContainer:{
       marginTop: height * .02,
    },
    suggestion:{
        width: width * .08,
        height: height * .04,
    },
    row:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    title:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 16,
        lineHeight: 20,
        color: '#757575',
        marginVertical: height * .015,
        marginHorizontal: width * .02,
    },
    sortBtn:{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        borderRadius: 8,
        borderColor:'#C6C6C6',
        backgroundColor: COLORS.white,
        paddingHorizontal: width * .045,
        paddingVertical: height * .01,
        marginHorizontal: width * .02,
        marginVertical: height * .015,
    },
    activeBtn:{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        borderRadius: 8,
        borderColor:'#4CA6A8',
        backgroundColor: '#C6EAEF',
        paddingHorizontal: width * .045,
        paddingVertical: height * .01,
        marginHorizontal: width * .02,
        marginVertical: height * .015,
    },
    activeText:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 13,
        lineHeight: 15,
        color: '#07A3BC',
        marginBottom:-2,
    },
    sortBtnText:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 13,
        lineHeight: 15,
        color: '#757575',
        marginBottom:-2,
    },
    applyBtn:{
        position:'absolute',
        width: width * .92,
        bottom: height * .02,
        marginHorizontal: width * .04,
    },

})