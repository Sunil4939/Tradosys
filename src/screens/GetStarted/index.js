import React from "react";
import { ScrollView, Text, StatusBar, Image, View, TouchableOpacity } from "react-native";
import { COLORS, icons, images } from "../../constants";
import styles from "./styles";

const GetStarted = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.imgBox}>
                <Image style={styles.getStart} source={images.getStart} resizeMode="stretch" />
            </View>
            <View style={styles.textBox}>
                <Text style={styles.title}>Find your  hope {'\n'}&  make shop</Text>
                <Text style={styles.text}>Finding your dream job is more easire {'\n'}and faster with JobHub</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('LoginPage')}>
                <View style={styles.row}>
                    <Text style={styles.btnText}>Let’s Get Started</Text>
                    <Image style={styles.arrow_right} source={icons.arrow_right} resizeMode="stretch" />
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default GetStarted;