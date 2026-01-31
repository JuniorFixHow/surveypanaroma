import { TouchableOpacity } from 'react-native'
import React, { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import LoadingDots from '../../misc/LoadingDots'

type SignInButProps = {
    text: string
    loading?: boolean
    icon?: ReactNode
} & ComponentProps<typeof TouchableOpacity>

const SignInBut = ({text, loading, icon, className, ...props}: SignInButProps) => {
  return (
    <TouchableOpacity {...props}  className={twMerge('flex flex-row justify-center px-6 py-4 rounded-2xl gap-2 items-center bg-white dark:bg-slate-400 border-[0.2px] border-[#111827] shadow', className)} >
      {icon && icon}
      <LoadingDots loading={loading} text={text} textClassName='text-[#111827] text-sm font-bold tracking-wider' />
    </TouchableOpacity>
  )
}

export default SignInBut