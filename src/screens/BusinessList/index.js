import React, { useState } from "react";
import { ScrollView, Text, StatusBar, Image, View, TextInput, TouchableOpacity } from "react-native";
import { COLORS, icons } from "../../constants";
import DocumentPicker from 'react-native-document-picker';
import styles from "./styles";
import { Services } from "../../component/Services";
import { RadioButton } from 'react-native-paper';
import { ButtonComponent } from "../../component/ButtonComponent";

const BusinessList = ({ navigation }) => {
    const [text, setText] = useState('');
    const [singleFile, setSingleFile] = useState();
    const [checked, setChecked] = useState(false);
    const selectFile = async () => {

        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
        });
        setSingleFile(res);
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.topBox}>
                <View style={styles.topRow}>
                    <Text style={styles.text}>Start adding your </Text>
                    <Text style={styles.title}>business details:</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.inputBox}>
                    <Text style={styles.labels}>First Name</Text>
                    <TextInput
                        onChangeText={text => setText(text)}
                        defaultValue="Adom" style={styles.inputText1}
                    />
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.labels}>Last Name</Text>
                    <TextInput
                        onChangeText={text => setText(text)}
                        defaultValue="Shafi" style={styles.inputText1}
                    />
                </View>
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.labels}>Your business Email</Text>
                <TextInput
                    onChangeText={text => setText(text)}
                    defaultValue="hellobesnik@gmail.com" style={styles.inputText}
                />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.labels}>Shop Image</Text>
                <Text style={styles.uploadText}>Upload Here</Text>
                <TouchableOpacity style={styles.docoumentBox} onPress={selectFile}>
                    {singleFile == undefined &&
                        <View style={styles.row1}>
                            <Image style={styles.file} source={icons.file} resizeMode="contain" />
                        </View>
                    }
                    {singleFile &&
                        <View style={styles.imgBox}>
                            <Image style={styles.imgStyle} source={singleFile} resizeMode="contain" />
                        </View>
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.labels}>All services</Text>
                <View style={styles.serviceContainer}>
                    <Services serviceName={'Transfer free devlivery'} />
                </View>
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.labels}>Qulalification</Text>
                <View style={styles.serviceContainer}>
                    <Services serviceName={'Transfer free devlivery'} />
                </View>
            </View>


            <View style={styles.inputBox}>
                <Text style={styles.labels}>Your business/service/product name</Text>
                <TextInput
                    placeholder="E.g :- Pan vala"
                    onChangeText={text => setText(text)}
                    style={styles.inputText}
                />
            </View>
            <View style={styles.textBox}>
                <View style={styles.textRow}>
                    <Text style={styles.text1}>What is your for </Text>
                    <Text style={styles.title1}>business address </Text>
                    <Text style={styles.text1}>for “shop name”</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.inputBox}>
                    <Text style={styles.labels}>Pin Code</Text>
                    <TextInput
                        maxLength={6}
                        onChangeText={text => setText(text)}
                        keyboardType="numeric"
                        defaultValue="458001" style={styles.inputText1}
                    />
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.labels}>City</Text>
                    <TextInput
                        onChangeText={text => setText(text)}
                        defaultValue="Mandsaur" style={styles.inputText1}
                    />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.inputBox}>
                    <Text style={styles.labels}>State</Text>
                    <TextInput
                        onChangeText={text => setText(text)}
                        defaultValue="Maharastra" style={styles.inputText1}
                    />
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.labels}>Landmark</Text>
                    <TextInput
                        placeholder="Locality e.g"
                        onChangeText={text => setText(text)}
                        style={styles.inputText1}
                    />
                </View>
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.labels}>Address</Text>
                <TextInput
                    onChangeText={text => setText(text)}
                    defaultValue="33, kandoya Gali , sgree ram bhavan" style={styles.inputText}
                />
            </View>
            <View style={styles.textBox}>
                <View style={styles.textRow}>
                <Text style={styles.text}>Add your GST number</Text>
                </View>
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.labels}>GST Number</Text>
                <TextInput
                    maxLength={10}
                    keyboardType="numeric"
                    style={styles.inputText}
                />
                <Text style={styles.rightText}>Gst Seller get more enquires</Text>
            </View>
           

            <View style={styles.radioBox}>
                <View style={styles.radioRow}>
                    <RadioButton
                        color={COLORS.blue2}
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => setChecked(!checked)}
                    />
                    <Text style={styles.radioLabelTxt}>I don’’t have it</Text>
                </View>
            </View>
            <ButtonComponent title="Apply"
                style={styles.applyBtn} />
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default BusinessList;