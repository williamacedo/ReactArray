import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class ProductList extends Component {

	constructor(props) {
	    super(props);
	
        this.state = {
            counter: 0,
            list:[],
            imgLoading: false,
            store:''
        };

	    this.changeMinusValue = this.changeMinusValue.bind(this);
	    this.changePlusValue = this.changePlusValue.bind(this);
	} 

	changeMinusValue() {
	    if (this.state.counter > 0) {
            this.setState({counter:this.state.counter-1});
        }        
	}

	changePlusValue(key, qtd) {
        this.setState(prevState => ({
            list:prevState.list.concat({key, qtd})
        }));

        alert(JSON.stringify(this.state.list));

        /*if(this.arrayTeste != ''){
            let findItem = this.arrayTeste.find((mItem) => mItem.key === itemKey)
            //alert(JSON.stringify(findItem));    

            if(findItem){
                findItem.qtd = findItem.qtd + 1;
            }else{
                this.arrayTeste.push({
                    key: key,
                    qtd: qtd
                });
            }
        }else{
            this.arrayTeste.push({
                key: key,
                qtd: qtd
            });
        }
*/
         //alert(JSON.stringify(this.arrayTeste));
        

        /*if(array == ''){

            array.push({
                key: key,
                qtd: qtd
            });
        
        }else if(array != ''){

            for (var i in array) {           
                if(array[i].qtd != qtd){
                    array[i].qtd = qtd;
                    break;                    
                }         
            }

        }
        */

        //alert(JSON.stringify(array));        
	}

	render() {
		return (
			<View>
				<View>
					<View>
						<Text>{this.props.data.name} | {this.props.data.qtd}</Text>
						<Text>R$ {this.props.data.price}</Text>
                        <Text>{this.state.list.length}</Text>

                        <View style={style.buttonArea}>
                            <TouchableOpacity onPress={this.changeMinusValue}>
                                <Icon
                                  name='minus'
                                  type='font-awesome'
                                  color='#34495e'
                                />
                            </TouchableOpacity>
                                <Text style={style.inputValor}>{this.state.counter}</Text>
                            <TouchableOpacity onPress={() => this.changePlusValue(this.props.data.key, this.props.data.qtd)}>
                                <Icon
                                  name='plus'
                                  type='font-awesome'
                                  color='#34495e'
                                />
                            </TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
