import { ComponentProps } from 'react'
import { View, Text, TextInput } from 'react-native'
import { twMerge } from 'tailwind-merge'

type InputWithLabelProps = {
    label?:string;
    showLabel?: boolean,
    labelStyle?: string
} & ComponentProps<typeof TextInput>

const InputWithLabel = ({label, showLabel=true, labelStyle, className, ...props}:InputWithLabelProps) => {
  return (
    <View className='flex flex-col gap-1.5' >
    {
        showLabel &&
        <Text className={twMerge('text-[#111827] tracking-wide', labelStyle)} >{label}</Text>
    }
      <TextInput placeholderTextColorClassName='text-[0.5rem]'  className={twMerge('border border-[#E5E7EB] rounded px-3 py-2 text-lg placeholder:text-xs', className)} {...props} />
    </View>
  )
}

export default InputWithLabel