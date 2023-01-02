import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#EFF3FD',
    },
    topContainer:{
        paddingHorizontal: width * .03,
        backgroundColor: COLORS.white,
    },
    topRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal: width * .03,
        paddingVertical: height * .02,
        borderTopWidth: 2,
        borderTopColor: '#E4E7ED',
       
    },
    wlcText:{
        fontFamily: 'Poppins Bold 700',
        fontSize: 16,
        lineHeight: 20,
        color: COLORS.black,
    },
    todayDate:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 13,
        lineHeight: 16,
        color: '#707EAE',
    },
    box:{
        backgroundColor: COLORS.white,
        borderRadius:16,
        paddingHorizontal: width * .04,
        paddingTop: height * .01,
        height: height * .18,
        marginHorizontal: width * .04,
        marginTop: height * .02,
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: height * .02,
        marginBottom: height * .03,
    },
    row3:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    row2:{
        width :width * .5,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: height * .02,
        marginBottom: height * .03,
    },
    row1:{
        flexDirection:'row',
    },
    bag:{
        width: width * .09,
        height: height * .045,
    },
    list:{
        width: width * .05,
        height: height * .025,
        marginHorizontal: width * .01,
        marginTop: -5,
        tintColor:'#00DEA3',
    },
    title:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 16,
        lineHeight: 20,
        color: COLORS.black,
        marginTop: height * .01,
    },
    serviceText:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.black,
    },
    percentText:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 13,
        lineHeight: 16,
        color: '#00DEA3',
    },
    text:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 14,
        lineHeight: 18,
        color: '#746B6B',
    },
    
    smalltext:{
        fontFamily: 'Poppins Regular 400',
        fontSize: 10,
        lineHeight: 13,
        color: '#746B6B',
    },

    activityBox:{
        backgroundColor: COLORS.white,
        borderRadius:16,
        paddingHorizontal: width * .04,
        paddingTop: height * .01,
        height: height * .3,
        marginHorizontal: width * .04,
        marginTop: height * .04,
    },
    activityRow:{
        flexDirection:'row',
        marginVertical: height * .012,
    },
    recentTitle:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 18,
        lineHeight: 22,
        color: COLORS.black,
        marginVertical: height * .02,
    },
    activitytext:{
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 18,
        color: '#707EAE',
        width: width * .45,
    },
    
    activitysmtext:{
        fontFamily: 'Poppins Medium 500',
        fontSize: 12,
        lineHeight: 14,
        color: '#707EAE',
    },
})