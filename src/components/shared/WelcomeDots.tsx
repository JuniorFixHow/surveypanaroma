import { View } from 'react-native'
import React from 'react'

type WelcomeDotsProps = {
    isPageOne: boolean;
    isPageTwo: boolean;
    isPageThree: boolean;
}
const WelcomeDots = ({ isPageOne, isPageTwo, isPageThree }: WelcomeDotsProps) => {
  return (
    <View className='flex flex-row gap-2 items-center' >
        <View className={isPageOne ? 'bg-[#111827] w-6 h-1.5 rounded-full' : 'bg-gray-400 w-2 h-2 rounded-full'} />
        <View className={isPageTwo ? 'bg-[#111827] w-6 h-1.5 rounded-full' : 'bg-gray-400 w-2 h-2 rounded-full'} />
        <View className={isPageThree ? 'bg-[#111827] w-6 h-1.5 rounded-full' : 'bg-gray-400 w-2 h-2 rounded-full'} />
    </View>
  )
}

export default WelcomeDots