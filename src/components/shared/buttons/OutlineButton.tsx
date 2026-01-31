import { View,  TouchableOpacity } from 'react-native'
import LoadingDots from '../../misc/LoadingDots'
import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from '../../../utils/styles';

type OutlineButtonProps = {
    text:string;
    loading?:boolean
    icon?:ReactNode;
    textStyle?:string;
} & ComponentProps<typeof TouchableOpacity>

const OutlineButton = ({text, loading, icon, textStyle, className, ...props}: OutlineButtonProps) => {
  return (
    <TouchableOpacity className={twMerge('rounded p-4 border-[0.5px] border-[#D1D5DB', styles.flexCenter, className)} {...props} >
      <View className='flex flex-row items-center gap-3' >
        {icon && icon}
        <LoadingDots loading={loading} text={text} textClassName={twMerge('dark:text-white text-[#111827]', textStyle)} />
      </View>
    </TouchableOpacity>
  )
}

export default OutlineButton