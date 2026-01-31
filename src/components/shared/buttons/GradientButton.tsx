import {  TouchableOpacity, View } from 'react-native'
import LoadingDots from '../../misc/LoadingDots'
import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from '../../../utils/styles';

type GradientButtonProps = {
    text:string;
    loading?:boolean
    icon?:ReactNode;
} & ComponentProps<typeof TouchableOpacity>

const GradientButton = ({text, loading, icon, className, ...props}: GradientButtonProps) => {
  return (
    <TouchableOpacity className={twMerge('bg-linear-to-r from-[#2563EB] to-[#122C5C] rounded p-4', styles.flexCenter, className)} {...props} >
      <View className='flex flex-row items-center gap-3' >
        {icon && icon}
        <LoadingDots loading={loading} text={text} textClassName='text-white text-sm tracking-wider dark:text-[#111827]' />
      </View>
    </TouchableOpacity>
  )
}

export default GradientButton