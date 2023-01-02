import React from "react";
import { ScrollView, Text, StatusBar, View } from "react-native";
import { Notification } from "../../component/Notification";
import { COLORS, dummyData } from "../../constants";
import styles from "./styles";

const EnquiryPage = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
          <View style={styles.enquiryContainer}>
          {dummyData.NotificationData.map((item)=>
            <Notification key={item.id} data={item} />
            )}
          </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default EnquiryPage;