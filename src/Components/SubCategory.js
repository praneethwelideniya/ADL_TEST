import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Category from './Category';
const {height, width} = Dimensions.get('window');

const SubCategory = ({name, items}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{name}</Text>
      <View style={{marginTop: height / 40}}>
        {items.map((item, index) => {
          return <Category key={index.toString()} {...item} />;
        })}
      </View>
    </View>
  );
};

export default SubCategory;

const styles = StyleSheet.create({
  container: {paddingTop: height / 40},
  textStyle: {fontSize: width / 15, fontWeight: 'bold'},
});
