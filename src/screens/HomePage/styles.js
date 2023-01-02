import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingVertical: height * .02,
        paddingHorizontal: width * .03,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#B2AFAF',
        borderRadius: 10,
    },
    searchIcon: {
        width: width * .05,
        height: height * .025,
    },
    micBtn: {
        width: width * .1,
        height: height * .05,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mic: {
        width: width * .05,
        height: height * .03,
    },
    searchText: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 15,
        color: '#908A8A',
        width: width * .73,
        padding: 0,
    },
    slideRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: width * .08,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    slide: {
        width: width * .08,
        height: height * .06,
    },
    location: {
        width: width * .06,
        height: height * .06,
    },
    locationText: {
        fontFamily: 'Poppins Medium 500',
        fontSize: 12,
        lineHeight: 14,
        color: COLORS.black,
        borderBottomWidth: 1,

    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: height * .02,
    },
    ads: {
        width: width * .14,
        height: height * .07,
    },


    bottomSheet: {
        backgroundColor: COLORS.white,
        marginHorizontal: width * .01,
        paddingHorizontal: width * .04,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        elevation: 10,
    },
    slideTopBox: {
        alignItems: 'center',
        paddingVertical: height * .01,
    },
    slideTop: {
        width: width * .2,
        height: 4,
        backgroundColor: '#CACACA',
    },
    moodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: height * .01,
    },
    moodImage: {
        width: width * .22,
        height: height * .11,
    },
    moodImageBox: {
        width: width * .22,
        height: height * .11,
        borderRadius: 10,
        overflow:'hidden',
        marginHorizontal: width * .02,
    },
    serviceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginVertical: height * .01,
        marginHorizontal: width * .02,
    },

    backgroundVideoContainer: {
        height: height * .28,
        borderRadius: 15,
        marginVertical: height * .01,
        overflow: 'hidden',
    },
    backgroundVideo: {
        height: height * .28,
        borderRadius: 15,
    },
    play: {
        width: width * .04,
        height: height * .024,
    },
    playBtn: {
        position: 'absolute',
        top: height * .09,
        left: width * .34,
        width: width * .2,
        height: height * .1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#23A6F0',
        borderRadius: 50,
    },

    foodContainer: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: height * .01,
    },
    foodCategory:{
        alignItems: 'center',
    },
    foodImage: {
        width: width * .12,
        height: height * .06,
    },
    foodImageBox: {
        width: width * .14,
        height: height * .07,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DCF2E5',
    },
    foodName: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 12,
        lineHeight: 15,
        color: COLORS.black2,
        textAlign: 'center',
        marginTop: height * .01,
    },
})