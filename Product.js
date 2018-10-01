import React, { Component } from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import ProductList from './ProductList';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                {key: 1, name:'item 1', qtd:0, price: '5.00'},
                {key: 2, name:'item 2', qtd:0, price: '5.00'}
            ],
        };
    }
    render() {
        return (
          <FlatList  data={this.state.list} 
          keyExtractor={(item) => item.toString()} 
          renderItem={({item}) =><ProductList data={item} />} 
          />
        );
}
