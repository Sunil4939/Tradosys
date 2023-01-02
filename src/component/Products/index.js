import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions, View, Image, TextInput } from "react-native";
import { COLORS, } from "../../constants";
const { width, height } = Dimensions.get('window')


const Products = ({ data, navigation }) => {
    return (
        <View style={styles.prodctBox}>
            <View style={styles.imgContainer}>
            <View style={styles.imageBox}>
                <Image source={data.image} style={styles.carImage} resizeMode="contain" />
            </View>
            </View>
            <Text style={styles.productName}>{data.ProductName}</Text>
            <View style={styles.btnRow}>
                <TouchableOpacity style={styles.EditBtn}>
                    <Text style={styles.btnText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.DeleteBtn}>
                    <Text style={styles.btnText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Products;

const styles = StyleSheet.create({
    prodctBox: {
        width: width * .8,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        elevation: 9,
        marginHorizontal: width * .1,
        marginVertical: height * .02,
    },
    imgContainer:{
        alignItems: 'center',
        marginTop: height * .02,
        marginBottom:height * .06,
    },
    imageBox: {
        width: width * .5,
        height: height * .13,
    },
    carImage: {
        width: width * .5,
        height: height * .13,
    },
    productName: {
        fontFamily: 'Poppins Bold 700',
        fontSize: 16,
        lineHeight: 20,
        paddingBottom: 2,
        color: COLORS.black,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E3E3E3',
    },
    btnRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: height * .02,
        marginHorizontal: width * .05,
    },
    EditBtn: {
        width: width * .25,
        height: height * .05,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
        backgroundColor: '#312E2E',
    },
    DeleteBtn: {
        width: width * .25,
        height: height * .05,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
        backgroundColor: '#9C3E3E',
    },
    btnText: {
        fontFamily: 'Poppins SemiBold 600',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.white,
        marginBottom: -3,
    },
   

})