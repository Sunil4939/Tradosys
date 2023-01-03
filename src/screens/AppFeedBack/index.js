import React from "react";
import {  Text, StatusBar, View, TouchableOpacity } from "react-native";
import { ButtonComponent } from "../../component/ButtonComponent";
import FeedBackButton from "../../component/FeedBackButton";
import { COLORS, icons, } from "../../constants";
import styles from "./styles";

const AppFeedBack = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <View style={styles.FeedBackContainer}>
                  <FeedBackButton 
                title={'Report a bug'}
                subtitle={'Please let us know about the issue'}
                icon={icons.warning}
                onPress={()=> navigation.navigate('Bugs')}
                />
                 <FeedBackButton 
                title={'Suggest an app feature'}
                subtitle={'Help us get better, let us know your feedback'}
                icon={icons.suggestion}
                // iconStyle={styles.suggestion}
                onPress={()=> navigation.navigate('Features')}
                />
            </View>
      <ButtonComponent 
      title={'Apply Now'}
      style={styles.applyBtn}
      />
    </View>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default AppFeedBack;