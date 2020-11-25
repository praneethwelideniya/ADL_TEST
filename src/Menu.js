/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {StyleSheet, Text, View,FlatList,TouchableOpacity,Dimensions} from 'react-native';
import SubCategory from './Components/SubCategory'
import React,{useRef,useState} from 'react';
import Data from './dummydata';

const {height, width} = Dimensions.get('window');

const Menu = () => {

  const [categoryIndex,setCategoryIndex] =  useState(0);

  const refFlatList = useRef(null); 
  const refHorizontalFlatList = useRef(null); 
  const onViewRef = useRef((items)=> {
    if(items.viewableItems.length>0){
    setCategoryIndex(items.viewableItems[0].index)
    refHorizontalFlatList.current.scrollToIndex({ animated: true, index:items.viewableItems[0].index })
    }
  })
  const viewConfigRef = useRef({itemVisiblePercentThreshold: 50 })

  return (
    <View style={styles.container}>
      <View style={{flex:1,borderBottomWidth:0.5}}>
        <FlatList
          data={Data.categories}
          ref={refHorizontalFlatList}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.subCategoriescontentContainerStyle}
          renderItem={({ item,index }) =>
            <TouchableOpacity key={index.toString()} onPress = {() => refFlatList.current.scrollToIndex({ animated: true, index: index })} style={[styles.subCategoryStyle,{borderBottomWidth: index===categoryIndex?2:0}]} overlayColor="#000000">
              <Text>{item.category}</Text>
            </TouchableOpacity> 
          }
        />
      </View>
      <View style={{flex:9}}>
        <FlatList
          data={Data.categories}
          ref={refFlatList}
          keyExtractor={(item, index) => index.toString()}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          contentContainerStyle={styles.categoriescontentContainerStyle}
          renderItem={({ item ,index}) =>
            <SubCategory key={index.toString()} name={item.category} items={item.items}/>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{flex:1,flexDirection:'column',marginHorizontal:10},
  subCategoriescontentContainerStyle:{paddingTop:height/25},
  subCategoryStyle:{paddingHorizontal:width/20,paddingBottom:height/35},
  categoriescontentContainerStyle:{paddingBottom: height/2},
});

export default Menu;
