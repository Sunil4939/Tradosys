import React from "react";
import { ScrollView, Text, StatusBar, View, TextInput, Image, TouchableOpacity } from "react-native";
import { ButtonComponent } from "../../component/ButtonComponent";
import { COLORS, icons } from "../../constants";
import styles from "./styles";

const RegisterPage = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.lightWhite} barStyle="dark-content" />
            <View style={styles.textBox}>
                <Text style={styles.title}>Register Account</Text>
                <Text style={styles.text}>Fill your details or continue{'\n'} with social media</Text>
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    placeholder="User Name"
                    placeholderTextColor={'#6A6A6A'}
                    style={styles.input}
                />
                <Image source={icons.user} resizeMode="contain" style={styles.mail} />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    placeholder="Email Address"
                    placeholderTextColor={'#6A6A6A'}
                    style={styles.input}
                />
                <Image source={icons.mail} resizeMode="contain" style={styles.mail} />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor={'#6A6A6A'}
                    style={styles.input} />
                <Image source={icons.lock} resizeMode="contain" style={styles.lock} />
                <TouchableOpacity style={styles.showBtn} >
                    <Image source={icons.show} resizeMode="contain" style={styles.show} />
                </TouchableOpacity>
            </View>

            <ButtonComponent title="SIGN UP"
                onPress={() => navigation.navigate('Verification')}
                style={styles.loginBtn} />
            <View style={styles.row}>
                <View style={styles.box}></View>
                <Text style={styles.orText}>Or Continue with</Text>
                <View style={styles.box}></View>
            </View>
            <View style={styles.row1}>
                <TouchableOpacity style={[styles.socialBtn, { backgroundColor: '#E9F4FF' }]} >
                    <Image source={icons.google} resizeMode="contain" style={styles.google} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialBtn} >
                    <Image source={icons.facebook} resizeMode="contain" style={styles.facebook} />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <Text style={styles.userTxt}>Already Have Account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
                    <Text style={styles.accountTxt}> Log In</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default RegisterPage;