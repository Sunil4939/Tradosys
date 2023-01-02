import React, { useState } from "react";
import { Text, StatusBar, View, TouchableOpacity, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ButtonComponent } from "../../component/ButtonComponent";
import { COLORS, } from "../../constants";
import styles from "./styles";

const SendEnquiry = ({ navigation }) => {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <KeyboardAwareScrollView>
            <View style={styles.inputBox}>
                <Text style={styles.labels}>First Name</Text>
                <TextInput
                    onChangeText={text => setText(text)}
                    defaultValue="Adom" style={styles.inputText}
                />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.labels}>Your Email</Text>
                <TextInput
                    onChangeText={text => setText(text)}
                    defaultValue="hellobesnik@gmail.com" style={styles.inputText}
                />
            </View>
            
            <View style={styles.inputBox}>
                <Text style={styles.labels}>Massage</Text>
                <TextInput
                    onChangeText={text => setText(text)}
                    multiline={true}
                    numberOfLines={6}
                    defaultValue="I love being a part of the creative process and the challenge of making a complicated product very simple to use. Specializing in User Experience, User Interface."
                     style={styles.messagInputText}
                />
            </View>
            </KeyboardAwareScrollView>
            <ButtonComponent
                title={'Send'}
                style={styles.applyBtn}
                onPress={() => navigation.navigate('AppFeedBack')}
            />
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default SendEnquiry;