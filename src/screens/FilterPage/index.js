import React from "react";
import {  Text, StatusBar, View, TouchableOpacity } from "react-native";
import { ButtonComponent } from "../../component/ButtonComponent";
import { COLORS, } from "../../constants";
import styles from "./styles";

const FilterPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <View style={styles.sortContainer}>
        <Text style={styles.title}>sort By</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.activeBtn}>
            <Text style={styles.activeText}>Relevance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortBtn}>
            <Text style={styles.sortBtnText}>Rating</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortBtn}>
            <Text style={styles.sortBtnText}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortBtn}>
            <Text style={styles.sortBtnText}>Friends Raring</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortBtn}>
            <Text style={styles.sortBtnText}>Distance</Text>
          </TouchableOpacity>
        </View>
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

export default FilterPage;