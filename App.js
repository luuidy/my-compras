import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';


const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];


export default function App() {  
  return (
    <View>
      <Text style={{fontSize: 32, margin: 15, fontWeight: '500', color: 'black', marginBottom: 40}}>Lista</Text>
      <View style={styles.container}>
          <TextInput
            style={styles.inputItem}
            value='arroz'
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputItem: {
    height: 50, 
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    width: '90%',
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    textTransform: 'capitalize'
  },
  title: {
    fontSize: 32,
  },
});
