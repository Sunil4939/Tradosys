import React from "react";
import { ScrollView, Text, StatusBar, View, Image, TouchableOpacity } from "react-native";
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS, images } from "../../constants";
import styles from "./styles";
import CountDown from 'react-native-countdown-component';
import {ButtonComponent} from "../../component/ButtonComponent";

const Verification = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <KeyboardAwareScrollView>
                <View >
                    <View style={styles.imgBox}>
                        <Image source={images.verify} style={styles.verify} resizeMode="contain" />
                    </View>
                    <View style={styles.textBox}>
                        <Text style={styles.title}>OTP VERIFICATION</Text>
                        <View style={styles.row}>
                            <Text style={styles.text}>Enter the OTP sent to -</Text>
                            <Text style={styles.numberTxt}> +91-8976500001</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.OtpRow}>
                    <OTPInputView onPress={() => console.log("press me")}
                        style={styles.OtpinputBox}
                        pinCount={4}
                        codeInputFieldStyle={styles.boxstyle}
                        onCodeFilled={(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                        })}
                    />
                </View>
                <View style={styles.row}>
                    <CountDown
                        until={120}
                        digitStyle={{ backgroundColor: 'transparent' }}
                        digitTxtStyle={styles.digitStyle}
                        separatorStyle={styles.digitStyle}
                        timeToShow={['M', 'S']}
                        timeLabels={{ m: null, s: null }}
                        showSeparator
                    />
                     <Text style={styles.digitStyle}>Sec</Text>
                </View>
                <View style={styles.textBox}>
                    <View style={styles.row}>
                        <Text style={styles.text}>Don’t receive code ? </Text>
                        <TouchableOpacity>
                            <Text style={styles.numberTxt}>Re-send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ButtonComponent title="Submit"
                    onPress={() => navigation.navigate('BottomTabNavigator')}
                    style={styles.submitBtn} />
            </KeyboardAwareScrollView>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Verification;