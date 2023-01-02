import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
   
        ProductCard: {
            flexDirection: 'row',
            paddingVertical: height * .01,
            paddingHorizontal: width * .02,
            borderWidth:1,
            borderRadius: 5,
            borderColor: '#DBDBDB',
            backgroundColor:COLORS.white,
            marginVertical: height * .01,
        },
        productImageBox: {
            width: width * .24,
            height: height * .17,
            borderRadius: 5,
            overflow:'hidden',
        },
        productImage: {
            width: width * .24,
            height: height * .17,
        },
        contentBox:{
            marginLeft: width * .03,
        },
        title: {
            fontFamily: 'Poppins Bold 700',
            width: width * .6,
            fontSize: 13,
            lineHeight: 15,
            color: COLORS.black2,
        },
      
        ratingRow:{
            flexDirection:'row',
            alignItems: 'center',
        },
        dot: {
            width: 5,
            height: 5,
            borderRadius: 50,
            marginLeft: width * .02,
            backgroundColor:COLORS.black,
        },
        location: {
            width: width * .06,
            height: height * .03,
        },
        star: {
            width: width * .04,
            height: height * .02,
            marginLeft: width * .01,
        },
        rating: {
            fontFamily: 'Poppins Bold 700',
            fontSize: 13,
            lineHeight: 15,
            marginBottom:3,
            marginRight: width * .01,
            color: COLORS.black2,
        },
        locationText:{
            fontFamily: 'Poppins Medium 500',
            fontSize: 10,
            lineHeight: 14,
            color: COLORS.black2, 
        },
        call: {
            width: width * .05,
            height: height * .025,
        },
        btnRow:{
            flexDirection:'row',
            alignItems:'center',
            marginTop: height * .03,
        },
        callBtn:{
            width: width * .2,
            height: height * .04,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            borderWidth:1,
            borderColor:COLORS.blue2,
            borderRadius:3,
        },
        incuriryBtn:{
            width: width * .2,
            height: height * .04,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:COLORS.blue2,
            borderRadius:3,
            marginLeft: width * .05,
        },


        categoryCard: {
            width: width * .21,
            height: height * .11,
            paddingVertical: height * .01,
            paddingHorizontal: width * .015,
            alignItems:'center',
            elevation:5,
            borderRadius: 10,
            backgroundColor:COLORS.white,
            marginVertical: height * .01,
        },
        categoryImgBox:{
            width: width * .16,
            height: height * .08,
            marginTop: height * -.02,
        },
        image:{
            width: width * .16,
            height: height * .08,
        },
        categoryName:{
            fontFamily: 'Poppins Regular 400',
            fontSize: 10,
            lineHeight: 12,
            color: '#757070', 
        },


        ServiceCard: {
            width: width * .39,
            height: height * .12,
            paddingVertical: height * .01,
            paddingHorizontal: width * .015,
            elevation:2,
            borderRadius: 10,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#FEF3DF',
            marginVertical: height * .01,
        },
        serviceName:{
            width: width * .23,
            fontFamily: 'Poppins Regular 400',
            fontSize: 15,
            lineHeight: 22,
            color: '#757070',
            textAlign: 'center', 
        },
        serviceImage: {
            width: width * .14,
            height: height * .07,
            marginTop: height * .01,
        },
  })