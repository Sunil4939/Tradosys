import React from "react";
import { ScrollView, Text, View, Image, StatusBar } from "react-native";
import Products from "../../component/Products";
import { COLORS, dummyData, icons } from "../../constants";
import styles from "./styles";

const MyBusiness = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.box}>
                <View style={styles.row}>
                    <View style={styles.bagBtn}>
                        <Image source={icons.bag} style={styles.bag} resizeMode="contain" />
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.title}>Pan vala</Text>
                        <Text style={styles.subtitle}>Ayodhya nagar bhopal</Text>
                    </View>
                </View>
            </View>
            <View style={styles.productContainer}>
                <View style={styles.titleBox}>
                    <Text style={styles.serviceTitle}>Your Products/services</Text>
                </View>
                {dummyData.ProductInfo.map((item)=>
                <Products key={item.id} data={item} />
                )}
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default MyBusiness;