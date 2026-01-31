import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../utils/styles'
import { twMerge } from 'tailwind-merge'
import LOGO from '../../images/logo.png'
import SignInBut from '../shared/buttons/SignInBut'
import { AntDesign, Feather, Fontisto } from '@expo/vector-icons'
import { colors } from '../../utils/colors'
import { useRouter } from 'expo-router'
const LoginComp = () => {
    const router = useRouter();
  return (
    <View className={twMerge(styles.screenContainer, 'gap-8, items-center')} >
      <View className='flex w-full flex-col items-center' >
        <Image style={{width:200, height:200, resizeMode:'cover'}} source={LOGO} />
        <Text className={twMerge(styles.greytext, 'text-center w-9/10 -mt-4')} >Sign in to continue your journey</Text>
      </View>
      <View className={twMerge(styles.flexCenter, 'grow gap-8 w-full')} >
        <View className='flex flex-col gap-1.5 w-full items-center' >
            <SignInBut
                onPress={()=>router.replace('(private)/trial')} 
                text='Sign in with Google' className='w-full' 
                icon={<AntDesign name="google" size={24} color="#EF4444" />}
            />
            <Text className={styles.greytext} >Or</Text>
            <SignInBut
                onPress={()=>router.replace('(private)/trial')} 
                text='Sign in with Apple' className='w-full' 
                icon={<AntDesign name="apple" size={24} color={colors.primary} />}
            />
        </View>

        <View className='flex flex-row w-full p-4 rounded border border-[#BFDBFE] items-start gap-2.5 bg-[#EFF6FF] dark:bg-slate-400' >
            <Fontisto name="shopping-package" size={20} color={colors.primary} />
            <View className='flex flex-col gap-1 flex-1 min-w-0' >
                <Text className='text-[#1E3A8A] dark:text-slate-100 tracking-wider font-bold' >Free Trial Available</Text>
                <Text  className='text-[#1D4ED8] dark:text-slate-100 text-sm tracking-wider font-bold' >Start with 30 days free access to all premium features</Text>
            </View>
        </View>

        <View className='flex flex-row w-full items-start gap-2' >
            <Feather name="file-text" size={18} color={colors.primary} />
            <View className='flex flex-row gap-1 flex-wrap' >
                <Text className='text-[#111827] dark:text-slate-100 tracking-wider font-bold' >By signing in, you agree to our</Text>
                <TouchableOpacity className='flex' onPress={()=>router.navigate('/(public)/terms')} >
                    <Text className='text-[#111827] dark:text-slate-100 tracking-wider underline font-bold' >Terms of Service</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  )
}

export default LoginComp