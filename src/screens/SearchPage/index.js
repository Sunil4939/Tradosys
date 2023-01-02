import React, {useState} from "react";
import { ScrollView, Text, StatusBar, TextInput, TouchableOpacity, View, Image } from "react-native";
import { ProductCard } from "../../component/CardComponent";
import { COLORS, dummyData, icons } from "../../constants";
import styles from "./styles";
import Modal from "react-native-modal";

const SearchPage = ({ navigation }) => {
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
          {dummyData.ProductData.map((item)=>
            <ProductCard
            key={item.id}
            data={item}
            onPress={() => navigation.navigate('ProductDetails')}
            navigation={navigation}
            />
            )}
          </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default SearchPage;