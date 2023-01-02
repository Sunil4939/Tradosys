import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions, View, Image } from "react-native";
import { COLORS, icons } from "../../constants";
const { width, height } = Dimensions.get('window')



const FeedBackButton = ({ title, subtitle, icon, iconStyle, onPress, }) => {
    return (
        <TouchableOpacity style={styles.buttons} onPress={onPress}>
            <View style={styles.iconBox}>
                <Image source={icon} style={[styles.icons, iconStyle]} resizeMode="contain" />
            </View>
            <View style={styles.textBox}>
              <View>
              <Text style={styles.labels}>{title}</Text>
                {subtitle &&
                    <Text style={styles.subtitle}>{subtitle}</Text>
                }
              </View>
            <Image source={icons.rightArrow} style={styles.rightArrow} resizeMode="contain" />
            </View>

        </TouchableOpacity>
    )
}
export default FeedBackButton;

const styles = StyleSheet.create({

    buttons: {
        flexDirection: 'row',
        paddingVertical: height * .01,
        marginTop: height * .012,
        marginHorizontal: width * .03,
    },
    iconBox: {
        width: width * .1,
        height: height * .05,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: width * .01,
    },
    labels: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 13,
        lineHeight: 18,
        color: COLORS.black2,
    },
    subtitle: {
        fontFamily: 'Poppins Regular 400',
        fontSize: 11,
        lineHeight: 14,
        color: COLORS.black,
        marginTop: 2,
    },
    icons: {
        width: width * .07,
        height: height * .035,
    },
    rightArrow: {
        width: width * .04,
        height: height * .02,
        tintColor:'#AEAEAE',
    },
    textBox: {
        width: width * .8,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        paddingBottom: height * .02,
    },

})