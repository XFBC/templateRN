import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity, View, Linking } from 'react-native'

import Swiper from 'react-native-swiper'
import { getNewsBanners } from '../../services/fetchs/getNewsBanners'


interface IBanner {
  id: number
  title_evento: string
  link_evento: string
  image: string
}

export default function SwiperNews() {
  const [banners, setBanners] = useState<IBanner[]>()

  useEffect(() => {
    getNewsBanners().then(results => setBanners(results.banners)).catch(error => console.log(error))

  }, [])

  return (
    <View style={styles.wrapper}>
      {
        banners &&
        <Swiper showsButtons={true}>
          {
            banners?.map(banner => {
              const image = { uri: banner.image }
              return (
                <TouchableOpacity style={{ flex: 1 }} key={banner.id} onPress={() => { Linking.openURL(banner.link_evento) }} >
                  <ImageBackground source={image} style={{ flex: 1 }}>
                  </ImageBackground>
                </TouchableOpacity>
              )
            })
          }
        </Swiper>
      }
    </View>
  )
}



const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
    marginTop: 16,
  }
})
