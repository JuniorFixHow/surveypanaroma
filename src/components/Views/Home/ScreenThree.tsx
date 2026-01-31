import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../../../utils/styles'
import { twMerge } from 'tailwind-merge'
import MAP from '../../../images/map.png'
import Title from '../../shared/text/Title'
import WelcomeDots from '../../shared/WelcomeDots'
import PrimaryButton from '../../shared/buttons/PrimaryButton'
import { useRouter } from 'expo-router'


const ScreenThree = () => {
  const router = useRouter();
  return (
    <View className='flex flex-col mt-0 gap-20 h-full' >
      <View/>

      <View className={twMerge(styles.flexCenter, 'grow gap-10')} >
        <View className="w-60 h-60 rounded-3xl overflow-hidden">
          <Image
            source={MAP}
            className="absolute inset-0 w-full h-full"
            resizeMode="cover"
          />

          <View className="absolute inset-0 bg-linear-to-b from-[#3B82F633] to-[#00000000]" />
        </View>

        <Title text='Map View' />
        <Text className={twMerge(styles.greytext, 'text-center w-9/10')} >Record your journey in real-time with precise GPS tracking. Never lose track of where you've been.</Text>
        <WelcomeDots isPageOne={false} isPageTwo={false} isPageThree={true} />
        <PrimaryButton onPress={()=>router.replace('/(public)')} text='Next' className='w-9/10' />
      </View>
    </View>
  )
}

export default ScreenThree