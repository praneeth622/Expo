import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {collection , getDocs, query} from 'firebase/firestore'
import {db} from '../../config/FIrebaseConfig'

export default function Slider() {
  const [Slider, setSlider] = useState([])

  useEffect(()=>{
    getSliderList()
  },[])
  const getSliderList = async()=>{
    setSlider([])
    const q = query(collection(db,'Slider'))
    const querysnapShot = await getDocs(q) 
    querysnapShot.forEach(doc => {
      console.log("docs",doc.data())
      setSlider(prev => [...prev, doc.data()]) 
    });
  }
  return (
    <View>
      <Text style={{
        padding:10,
        fontSize:20,
        marginBottom:5,
        fontWeight:'bold'
      }}
      >Slider</Text>
      <FlatList
        data={Slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{padding:15,paddingTop:15}}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item.imageUrl }}  
            style={{
              marginRight:20,
              padding: 20,
              borderRadius: 15,
              height: 150,
              width: 300
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}  // Unique key for each item
      />
    </View>
  )
}