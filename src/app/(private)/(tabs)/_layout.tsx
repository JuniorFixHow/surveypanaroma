import { Tabs } from 'expo-router'
// import { View, Text } from 'react-native'
import { colors } from '../../../utils/colors'
import { Entypo } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Tabs
      initialRouteName='index'
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.grey,
        tabBarLabelStyle:{color: colors.primary},
        tabBarStyle:{
            backgroundColor:'#fff'
        }
      }}
    >
        <Tabs.Screen name="index" options={{ 
            title: 'Home', tabBarIcon: ({color})=> <Entypo name="home" size={24} color={color} />
        }} />
    </Tabs>
  )
}

export default _layout