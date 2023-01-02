import React from "react";
import { Text, StatusBar, View, TouchableOpacity } from "react-native";
import DoctorBtn from "../../component/DoctorBtn";
import { COLORS, dummyData, icons, } from "../../constants";
import styles from "./styles";

const Doctors = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.DoctorContainer}>
                {dummyData.DoctorData.map((item)=> 
                <DoctorBtn 
                key={item.id}
                data={item}
                />
                )}
            </View>

        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Doctors;