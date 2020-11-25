import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const Category = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{props.name}</Text>
      <Text style={styles.priceText}>LKR {props.price}</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {marginTop: height / 70, borderBottomWidth: 0.5},
  nameText: {fontSize: width / 20},
  priceText: {fontSize: width / 22, paddingBottom: height / 70},
});
