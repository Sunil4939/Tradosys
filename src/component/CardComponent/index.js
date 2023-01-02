import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions, View, Image } from "react-native";
import { COLORS, icons, images } from "../../constants";
import styles from "./styles";
const { width, height } = Dimensions.get('window')

const CategoryCard = ({ data, imageStyle, onPress, }) => {
    return (
        <TouchableOpacity style={styles.categoryCard} onPress={onPress}>
            <View style={styles.categoryImgBox}>
                <Image source={data.image} style={[styles.image, imageStyle]} resizeMode="contain" />
            </View>
            <Text style={styles.categoryName}>{data.categoryName}</Text>
        </TouchableOpacity>
    )
}

const ServiceCard = ({ data, onPress, }) => {
    return (
        <TouchableOpacity style={[styles.ServiceCard,{backgroundColor:data.color}]} onPress={onPress}>
            <Text style={styles.serviceName}>{data.serviceName}</Text>
            <View style={styles.categoryImgBox}>
                <Image source={data.image} style={styles.serviceImage} resizeMode="contain" />
            </View>
        </TouchableOpacity>
    )
}

const ProductCard = ({ data, onPress, navigation }) => {
    return (
        <TouchableOpacity style={styles.ProductCard} onPress={onPress}>
            <View style={styles.productImageBox}>
                <Image source={data.image} style={styles.productImage} resizeMode="contain" />
            </View>
            <View style={styles.contentBox}>
                <Text style={styles.title}>{data.title}</Text>
                <View style={styles.ratingRow}>
                    <Text style={styles.rating}>{data.rating}</Text>
                    <Image source={icons.star_fill} style={styles.star} resizeMode="contain" />
                    <Image source={icons.star_fill} style={styles.star} resizeMode="contain" />
                    <Image source={icons.star_fill} style={styles.star} resizeMode="contain" />
                    <Image source={icons.star_fill} style={styles.star} resizeMode="contain" />
                    <Image source={icons.star} style={styles.star} resizeMode="contain" />
                </View>
                <View style={styles.ratingRow}>
                    <Image source={icons.location} style={styles.location} resizeMode="contain" />
                    <View style={styles.ratingRow}>
                        <Text style={[styles.locationText, { color: '#B1B1B1' }]}>{data.location}</Text>
                        <View style={styles.dot}></View>
                        <Text style={styles.locationText}> {data.distance}</Text>
                    </View>
                </View>
                <View style={styles.btnRow}>
                    <TouchableOpacity style={styles.callBtn}>
                        <Image source={icons.call} style={styles.call} resizeMode="contain" />
                        <Text style={[styles.locationText, { color: COLORS.blue2 }]}>Call Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.incuriryBtn} onPress={()=> navigation.navigate('SendEnquiry')}>
                        <Text style={[styles.locationText, { color: COLORS.white }]}>Incuriry</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export {
    CategoryCard,
    ProductCard,
    ServiceCard,
}

