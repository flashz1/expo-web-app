import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { getRandomColor } from '@/utils/getRandomColor'

export default function Index() {
  const [bgColor, setBgColor] = useState('#ffffff')
  const onScreenPress = () => {
    setBgColor(getRandomColor())
  }

  return (
    <Pressable
      onPress={onScreenPress}
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: bgColor,
        }}
      >
        <Text style={{ fontSize: 40 }}>Hello there!</Text>
      </View>
    </Pressable>
  )
}
