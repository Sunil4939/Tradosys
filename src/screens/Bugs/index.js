import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ButtonComponent } from "../../component/ButtonComponent";
import { COLORS, icons } from "../../constants";
import styles from "./styles";

const Bugs = ({ navigation }) => {
    const [length, setLength] = useState(0)

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <KeyboardAwareScrollView>
           <View style={styles.textBox}>
           <TextInput 
            placeholder="Please let us know about the issue"
            placeholderTextColor={'#BFBFBF'}
            style={styles.inputText}
            numberOfLines={25}
            maxLength={500}
            onChangeText={(str)=> setLength(str.length) }
             />
             <Text style={styles.length}>{length}/500</Text>
           </View>
           <Text style={styles.text}>we read all feedback carefully , but we may not respond to each submission individually</Text>
           <ButtonComponent 
           style={styles.Btn}
           title={'Submit'} />
            </KeyboardAwareScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Bugs;