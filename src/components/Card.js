import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

const Card = () => {
    return (
        <View style={{
            elevation: 4,
            margin: 10
        }}>

            <Image
                source={{uri: "https://images.unsplash.com/photo-1576547849475-57662ff255ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3024&q=80"}}
                style={{
                    width: "100%",
                    height: 200
                }}
            />
            <View style={{
                flexDirection: "row",
                margin: 5
            }}>
                {/*Icon*/}
                <MaterialIcons name="account-circle" size={32} color="#212121" />

                {/*Text*/}
                <View style={{
                    marginLeft: 10,
                    width: Dimensions.get("screen").width - 50
                }}>
                    <Text
                        style={{fontSize: 20}}
                        ellipsizeMode="tail"
                        numberOfLines={1}
                    >Title</Text>
                    <Text>SubTitle</Text>
                </View>
            </View>
        </View>

    );
};


export default Card;
