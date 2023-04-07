import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import data from './data.json';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filterData = data.filter(term => term.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredData = data.filter(term => term.summary);

  const renderItem = ({ item }) => (
    <View style={flatListStyles.card}>
      <Text style={flatListStyles.title}>{item.title}</Text>
      <Text style={flatListStyles.summary}>{item.summary}</Text>
    </View>
  );

return (
    <SafeAreaView>
      <Text style={[mainHeadingStyle.header, mainHeadingStyle.headerText]}>
        {'Research Program on Children and Adversity'}
      </Text>
      <Text style={subheadingStyle.section}>
        {'Research Projects'}
      </Text>
      <TextInput
        style={textinputStyles.input}
        onChangeText={setSearchTerm}
        value={searchTerm}
        placeholder="Search"
      />
      <FlatList
        data={filterData}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
};


const textinputStyles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const flatListStyles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 10,
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  summary: {
    fontSize: 16,
  },
});

const subheadingStyle = StyleSheet.create({
  section: {
  fontSize: 30,
  fontWeight: 'bold',
  marginBottom: 30,
  marginLeft: 10
  }
})

const mainHeadingStyle = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#448AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerText: {
    padding: 10,
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default App;
