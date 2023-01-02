import React, { useState } from 'react';
import { ScrollView, Text, StatusBar, TextInput, TouchableOpacity, View, Image, } from "react-native";
import { COLORS, dummyData, icons, images } from "../../constants";
import styles from "./styles";
import Modal from "react-native-modal";

const ProductDetails = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const moveNextPage = () => {
        navigation.navigate('FilterPage')
        setModalVisible(!isModalVisible);
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.blue2} barStyle="dark-content" />
            <View style={styles.row}>
                <View style={styles.search}>
                    <TextInput style={styles.searchText} placeholder="Serach here..." placeholderTextColor={'#6A6A6A'} />
                    <TouchableOpacity style={styles.Btn}>
                        <Image source={icons.search} style={styles.searchIcon} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.adjustBtn} onPress={() => setModalVisible(!isModalVisible)}>
                    <Image source={icons.adjust} style={styles.searchIcon} resizeMode="contain" />
                </TouchableOpacity>
                <Modal isVisible={isModalVisible} style={styles.ModalContainer}>
                    <View style={styles.successContainer}>
                        <TouchableOpacity style={styles.btn} onPress={moveNextPage}>
                            <View style={styles.sortIconBox}>
                                <Image source={icons.sort} style={styles.sort} resizeMode="contain" />
                            </View>
                            <Text style={styles.btnTxt}>Sort by</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={moveNextPage}>
                            <View style={styles.sortIconBox}>
                                <Image source={icons.filter} style={styles.filter} resizeMode="contain" />
                            </View>
                            <Text style={styles.btnTxt}>Filter</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
            <View style={styles.productContainer}>
                <View style={styles.imageBox}>
                    <Image source={images.product_cover} style={styles.product_cover} resizeMode="cover" />
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.title}>Dr  vediks viyas  (shara  inyo and general Hospital)</Text>
                    <View style={styles.locationRow}>
                        <Text style={styles.spotify}>Spotify - </Text>
                        <View style={styles.locationRow}>
                            <Image source={icons.location1} style={styles.location1} resizeMode="contain" />
                            <Text style={styles.text}>Toronto Canada</Text>
                        </View>
                    </View>
                    <View style={styles.locationRow}>
                        <Text style={styles.rating}>4.5</Text>
                        <Image source={icons.star_fill} style={styles.star} resizeMode="contain" />
                        <Image source={icons.star_fill} style={styles.star} resizeMode="contain" />
                        <Image source={icons.star_fill} style={styles.star} resizeMode="contain" />
                        <Image source={icons.star_fill} style={styles.star} resizeMode="contain" />
                        <Image source={icons.star} style={styles.star} resizeMode="contain" />
                    </View>
                    <Text style={styles.spotify}>MS - othopadic doctor</Text>
                    <View style={styles.locationRow}>
                        <View style={styles.locationRow}>
                            <Image source={icons.location} style={styles.location} resizeMode="contain" />
                            <Text style={styles.text}>Misrod Road M.P nagar</Text>
                        </View>
                    </View>
                    <View style={styles.locationRow}>
                        <Text style={styles.rupey}>₹</Text>
                        <Text style={styles.text}>500 - 450 Rs,</Text>
                    </View>
                    <View style={styles.btnRow}>
                        <TouchableOpacity style={styles.buttons}>
                            <View style={styles.callBox}>
                                <Image source={icons.call} style={styles.call} resizeMode="contain" />
                            </View>
                            <Text style={styles.buttonText}>Call Now</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons}>
                            <Image source={icons.location} style={styles.location2} resizeMode="contain" />
                            <Text style={styles.buttonText}>Directions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons}>
                            <Image source={icons.whatsapp} style={styles.whatsapp} resizeMode="contain" />
                            <Text style={styles.buttonText}>WhatsApp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons}>
                            <Image source={icons.share1} style={styles.share1} resizeMode="contain" />
                            <Text style={styles.buttonText}>Share</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.enquiryBtn} onPress={()=> navigation.navigate('SendEnquiry')}>
                        <Text style={styles.enquiryBtnTxt}>Enquiry Now</Text>
                    </TouchableOpacity>

                    <Text style={styles.title1}>Photos</Text>
                    <ScrollView horizontal={true}>
                        <View style={styles.photoContainer}>
                            {dummyData.ProductPhotos.map((item) =>
                                <TouchableOpacity key={item.id} style={styles.photoBox}>
                                    <Image source={item.image} style={styles.photos} resizeMode="contain" />
                                </TouchableOpacity>
                            )}
                        </View>
                    </ScrollView>
                    <View style={styles.timeRow}>
                        <View style={styles.locationRow}>
                            <Image source={icons.clock_outline} style={styles.clock} resizeMode="contain" />
                            <Text style={styles.txt}>Full Time</Text>
                        </View>
                        <Text style={styles.txt}>$1200/m</Text>
                    </View>
                </View>
                <View style={styles.smallBtnRow}>
                    <TouchableOpacity style={[styles.smallBtn, { backgroundColor: COLORS.blue2, }]}>
                        <Text style={[styles.smallBtnText, { color: COLORS.white, }]}>Description</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.smallBtn}>
                        <Text style={styles.smallBtnText}>Company</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.smallBtn}>
                        <Text style={styles.smallBtnText}>Reviews</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.headings}>Qualifications :</Text>
                    <View style={styles.descriptionRow}>
                        <View style={styles.dot}></View>
                        <Text style={styles.description}>Exceptional communication skills and team working skill</Text>
                    </View>
                    <View style={styles.descriptionRow}>
                        <View style={styles.dot}></View>
                        <Text style={styles.description}>Creative with an eye for shape and colour</Text>
                    </View>
                    <View style={styles.descriptionRow}>
                        <View style={styles.dot}></View>
                        <Text style={styles.description}>Know the principal of animation and you can create high prtotypes</Text>
                    </View>
                    <View style={styles.descriptionRow}>
                        <View style={styles.dot}></View>
                        <Text style={styles.description}>Figma,Xd & Sketch must know about this apps</Text>
                    </View>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.headings}>Specification :</Text>
                    <View style={styles.descriptionRow}>
                        <View style={styles.dot}></View>
                        <Text style={styles.description}>Orthapadic surgone and joint disappper</Text>
                    </View>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.headings}>Registration no :</Text>
                    <View style={styles.descriptionRow}>
                        <View style={styles.dot}></View>
                        <Text style={styles.description}>MP-6464 Madhya pradesh Medical Concil 2003</Text>
                    </View>
                </View>
                <View style={styles.Box}>
                    <View style={styles.experienceRow}>
                        <Text style={styles.headings}>Year of Experience : </Text>
                        <Text style={[styles.description, { marginBottom: -2, }]}> 15 Years</Text>
                    </View>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.headings}>Services</Text>
                    <View style={styles.descriptionRow}>
                        <View style={styles.checkBox}>
                            <Image source={icons.check} style={styles.check} resizeMode="contain" />
                        </View>
                        <Text style={styles.services}>Unlimited product updates</Text>
                    </View>
                    <View style={styles.descriptionRow}>
                        <View style={styles.checkBox}>
                            <Image source={icons.check} style={styles.check} resizeMode="contain" />
                        </View>
                        <Text style={styles.services}>Unlimited product updates</Text>
                    </View>
                    <View style={styles.descriptionRow}>
                        <View style={styles.checkBox}>
                            <Image source={icons.check} style={styles.check} resizeMode="contain" />
                        </View>
                        <Text style={styles.services}>Unlimited product updates</Text>
                    </View>
                    <View style={styles.descriptionRow}>
                        <View style={styles.checkBox}>
                            <Image source={icons.check} style={styles.check} resizeMode="contain" />
                        </View>
                        <Text style={styles.services}>1GB  Cloud storage</Text>
                    </View>
                    <View style={styles.descriptionRow}>
                        <View style={styles.checkBox}>
                            <Image source={icons.check} style={styles.check} resizeMode="contain" />
                        </View>
                        <Text style={styles.services}>Email and community support</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default ProductDetails;