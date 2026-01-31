import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from '../../../utils/styles'
import { twMerge } from 'tailwind-merge'
import DIRECTION from '../../../images/direction.png'
import Title from '../../shared/text/Title'
import WelcomeDots from '../../shared/WelcomeDots'
import PrimaryButton from '../../shared/buttons/PrimaryButton'
import { useRouter } from 'expo-router'

type ScreenTwoProps = {
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const ScreenTwo = ({setPage}: ScreenTwoProps) => {
  const router = useRouter();
  return (
    <View className='flex flex-col mt-0 gap-20 h-full' >
      <TouchableOpacity onPress={()=>router.replace('/(public)')} className={twMerge(styles.flexCenter, 'self-end px-1')} >
        <Text className={styles.greytext} >Skip</Text>
      </TouchableOpacity>

      <View className={twMerge(styles.flexCenter, 'grow gap-10')} >
        <View className={twMerge(styles.flexCenter, 'w-60 h-60 rounded-full bg-linear-to-r from-[#DBEAFE] to-[#CFFAFE]')} >
           <View className={twMerge(styles.flexCenter, 'w-48 h-48 rounded-full bg-linear-to-r from-[#BFDBFE] to-[#A5F3FC]')} >
              <Image className='w-16 h-16' source={DIRECTION} />
           </View> 
        </View>
        <Title text='Calculate Distances' />
        <Text className={twMerge(styles.greytext, 'text-center w-9/10')} >Automatically measure your travel distance with accuracy. Get detailed insights into every trip.</Text>
        <WelcomeDots isPageOne={false} isPageTwo={true} isPageThree={false} />
        <PrimaryButton onPress={()=>setPage(3)} text='Next' className='w-9/10' />
      </View>
    </View>
  )
}

export default ScreenTwo