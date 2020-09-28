import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const Search = () => {
    return(
        <View style={{flex: 1}}>
            {/*Header*/}
            <View>
                <Ionicons name="md-arrow-back" size={32}/>
                <TextInput
                    value={value}
                    onChangeText={(text => )}
                />


            </View>
        </View>
    )

}

export default Search;