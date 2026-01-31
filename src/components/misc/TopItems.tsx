import { View,  TouchableOpacity, Image, Text } from 'react-native'
import BackIcon from './BackIcon'
import USERLOGO from '../../images/user.png'
import { styles } from '../../utils/styles'
import { twMerge } from 'tailwind-merge'
import { ComponentProps } from 'react'

type TopItemsProps = {
    title: string;
    textStyle?: string;
} & ComponentProps<typeof View>

const TopItems = ({ title, textStyle, className, ...props }: TopItemsProps) => {
  return (
    <View className={twMerge('flex relative justify-between px-4 pb-4 flex-row items-center pt-16 bg-linear-to-r from-[#2563EB] to-[#122C5C]', className)} {...props} >
      <BackIcon className='static h-8 w-8' />
      <Text className={twMerge('text-[1rem] tracking-wide font-semibold text-white', textStyle)} >{title}</Text>
      <TouchableOpacity className={styles.flexCenter} >
            <Image className='w-8 h-8 rounded-full' source={USERLOGO} resizeMode='contain' />
        </TouchableOpacity>
    </View>
  )
}

export default TopItems