import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  return (
    <>
      <SearchBar
        accessible={true}
        // term below used later for api
        // term={term}
        // onTermChange={setTerm}
        // onTermSubmit={() => searchApi(term)}
      />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')}>
        About
      </Button>
      <ScrollView accessible={true}></ScrollView>
    </>
  );
};

const styles = StyleSheet.create();

export default SearchScreen;
