import {  TouchableOpacity, View } from 'react-native'
import React, { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';
import LoadingDots from '../../misc/LoadingDots';
import { styles } from '../../../utils/styles';

type PrimaryButtonProps = {
    text:string;
    loading?:boolean
    icon?: ReactNode
} & ComponentProps<typeof TouchableOpacity>

const PrimaryButton = ({text, loading, icon, className, ...props}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity className={twMerge('bg-[#111827] dark:bg-slate-400 rounded p-4', styles.flexCenter, className)} {...props} >
      <View className='flex flex-row items-center gap-3' >
        {icon && icon}
        <LoadingDots loading={loading} text={text} textClassName='text-white dark:text-[#111827]' />
      </View>
    </TouchableOpacity>
  )
}

export default PrimaryButton