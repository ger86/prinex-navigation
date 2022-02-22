import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

const style = {flex: 1, justifyContent: 'center', alignItems: 'center'};

function CategoryItem({category}) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate({
            name: 'CreateExpenseForm',
            params: {
              categoryId: category.id
            }
          })
        }
      >
        <Text>{category.email}</Text>
      </TouchableOpacity>
    </View>
  );
}

function renderCategory({item}) {
  return <CategoryItem category={item} />;
}

export default function SelectCategory({navigation, route}) {
  const {categories} = route.params;
  return (
    <View style={style}>
      <FlatList data={categories} keyExtractor={(item) => item.id} renderItem={renderCategory} />
    </View>
  );
}
