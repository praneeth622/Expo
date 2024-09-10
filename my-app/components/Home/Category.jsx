import { View, Text } from 'react-native'
import React from 'react'

export default function Category() {
    return (
        <View>
            <View style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'
            }}>
            <Text style={{
                padding: 10,
                fontSize: 20,
                marginBottom: 5,
                fontWeight: 'bold'
            }}
            > Category
            </Text>
                <Text style={{
                    padding:20,
                    fontSize:15,
                    color:'#6C48C5',
                }}>
                    View All
                </Text>
            </View>
            <View>
                
            </View>
        </View>
    )
}