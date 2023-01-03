import React from "react";
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { ScreenBtnComponent } from "../../component/ButtonComponent";
import { icons, images } from "../../constants";
import styles from "./styles";

const DrawerContent = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.profileBtn}>
                <View style={styles.imgBox}>
                    <Image source={images.profileImage} style={styles.profileImage} resizeMode="contain" />
                </View>
                <View style={styles.rightBox}>
                    <View style={styles.row}>
                        <Text style={styles.name}>Adom Shafi</Text>
                        <View style={styles.rightArrowBox}>
                            <Image source={icons.rightArrow} style={styles.rightArrow} resizeMode="contain" />
                        </View>
                    </View>
                    <Text style={styles.text}>hellobesnik@gmail.com</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <ScreenBtnComponent icon={icons.user_fill} iconStyle={styles.user_fill} title='Dashboard' bg="#FF5441"
                 onPress={() => navigation.navigate('Dashboard')} />
                <ScreenBtnComponent icon={icons.brand} iconStyle={styles.brand} title='All Brands' bg="#AE6241" />
                <ScreenBtnComponent icon={icons.category} iconStyle={styles.category} title='All Categories' bg="#DBCDD7" />
                <ScreenBtnComponent icon={icons.clock} title='All Categories' bg="#FF9087" />
                <ScreenBtnComponent icon={icons.star} iconStyle={styles.star} title='Rate this app' bg="#CEE5FF" />
                <ScreenBtnComponent icon={icons.privacy} iconStyle={styles.privacy} title='Privacy policy' bg="#7F8D5F" />
                <ScreenBtnComponent icon={icons.condition} iconStyle={styles.condition} title='Term & Conditions' bg="#B79BC4" />
                <ScreenBtnComponent icon={icons.contact} iconStyle={styles.contact} title='Contact us  & Faqs' bg="#8DB6B7" />
                <ScreenBtnComponent icon={icons.share} title='Share App' bg="#FE33BF" />
            </View>
        </View>
    )
}
export default DrawerContent;