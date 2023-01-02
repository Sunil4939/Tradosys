import React from "react";
import { ScrollView, Text, StatusBar } from "react-native";
import { Notification } from "../../component/Notification";
import { COLORS, dummyData } from "../../constants";
import styles from "./styles";

const NotificationPage = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.blue2} barStyle="dark-content" />
            {dummyData.NotificationData.map((item)=>
            <Notification key={item.id} data={item} />
            )}
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default NotificationPage;