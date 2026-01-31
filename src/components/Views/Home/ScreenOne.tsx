import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../../utils/styles'
import { twMerge } from 'tailwind-merge'
import Title from '../../shared/text/Title'
import WelcomeDots from '../../shared/WelcomeDots'
import PrimaryButton from '../../shared/buttons/PrimaryButton'
import  {FontAwesome6}  from '@expo/vector-icons';
import { useRouter } from 'expo-router'

type ScreenOneProps = {
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const ScreenOne = ({setPage}: ScreenOneProps) => {
  const router = useRouter();
  return (
    <View className='flex flex-col  gap-20 h-full' >
      <TouchableOpacity onPress={()=>router.replace('/(public)')}  className={twMerge(styles.flexCenter, 'self-end px-1')} >
        <Text className={styles.greytext} >Skip</Text>
      </TouchableOpacity>

      <View className={twMerge(styles.flexCenter, 'grow gap-10')} >
        <View className={twMerge(styles.flexCenter, 'w-60 h-60 rounded-full bg-linear-to-r from-[#E0E7FF] to-[#F3E8FF]')} >
           <View className={twMerge(styles.flexCenter, 'w-48 h-48 rounded-full bg-linear-to-r from-[#C7D2FE] to-[#E9D5FF]')} >
              <FontAwesome6 name="location-dot" size={60} color="#111827" />
           </View> 
        </View>
        <Title text='Track Your Location' />
        <Text className={twMerge(styles.greytext, 'text-center w-9/10')} >Record your journey in real-time with precise GPS tracking. Never lose track of where you've been.</Text>
        <WelcomeDots isPageOne={true} isPageTwo={false} isPageThree={false} />
        <PrimaryButton onPress={()=>setPage(2)} text='Next' className='w-9/10' />
      </View>
    </View>
  )
}

export default ScreenOne