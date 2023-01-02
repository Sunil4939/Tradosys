import React from "react";
import { ScrollView, Text, StatusBar, View, Image } from "react-native";
import { COLORS, icons } from "../../constants";
import styles from "./styles";

const Dashboard = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.topContainer}>
                <View style={styles.topRow}>
                    <Text style={styles.wlcText}>Hello Kruluz Utsman</Text>
                    <Text style={styles.todayDate}>19 Jan 2022</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.row}>
                    <Image source={icons.bag} style={styles.bag} resizeMode="contain" />
                    <Text style={styles.title}>Business Shop</Text>

                    <View style={styles.row1}>
                        <Image source={icons.list} style={styles.list} resizeMode="contain" />
                        <Text style={styles.percentText}>9.5% </Text>
                    </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.serviceText}>Services :</Text>
                    <Text style={styles.text}> Laptop repareing, fan</Text>
                </View>

            </View>
            <View style={styles.box}>
                <View style={styles.row2}>
                    <Image source={icons.bag} style={styles.bag} resizeMode="contain" />
                    <Text style={styles.title}>All Products</Text>
                </View>
                <View style={styles.row3}>
                    <Text style={styles.text}>Total : 40 products</Text>
                    <Text style={styles.smalltext}>Approx cost :300 Rs.</Text>
                </View>
            </View>
            <View style={styles.activityBox}>
                <Text style={styles.recentTitle}>Recent Activities</Text>
                <View style={styles.activityRow}>
                    <Text style={styles.activitytext}>Users View</Text>
                    <Text style={styles.activitysmtext}>2.6k</Text>
                </View>
                <View style={styles.activityRow}>
                    <Text style={styles.activitytext}>Enquery user</Text>
                    <Text style={styles.activitysmtext}>2k</Text>
                </View>
                <View style={styles.activityRow}>
                    <Text style={styles.activitytext}>Intersted user</Text>
                    <Text style={styles.activitysmtext}>+1545,00</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Dashboard;