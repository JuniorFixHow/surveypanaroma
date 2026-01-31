import { Text, View } from 'react-native'
import { twMerge } from 'tailwind-merge'
import { styles } from '../../utils/styles'
import TopContent from '../misc/TopContent'
import GreenCircle from '../misc/trial/GreenCircle'
import Title from '../shared/text/Title'
import CountdownBox from '../misc/trial/CountdownBox'
import { FontAwesome6 } from '@expo/vector-icons'
import { colors } from '../../utils/colors'
import Notice from '../misc/Notice'
import GradientButton from '../shared/buttons/GradientButton'
import OutlineButton from '../shared/buttons/OutlineButton'
import { useRouter } from 'expo-router'

const TrialComp = () => {
    const router = useRouter();
  return (
    <View className={twMerge(styles.screenContainer, 'gap-8 h-full items-center pb-8')} >
      <TopContent showBack={false} title='Trial Activated'/>
      <GreenCircle />
      <View className='flex items-center justify-center flex-col gap-2' >
        <Text className={twMerge(styles.greytext,'')} >You have</Text>
        <Title text='30 days' />
        <Text className={twMerge(styles.greytext,'')} >free access to all features</Text>
      </View>
      <CountdownBox />
      <View className='w-full flex flex-col gap-3' >
        <Text className={`text-lg text-[#111827] tracking-wider font-bold`} >What's included:</Text>
        <View className='flex flex-row items-center gap-2.5 w-full p-4 rounded-lg bg-white border border-slate-200' >
            <FontAwesome6 name="crown" size={24} color={colors.primary} />
            <Text className='text-[#111827] font-semibold tracking-wider' >Limited access period</Text>
        </View>
      </View>
      <Notice title='Trial Reminder' text='You can cancel anytime before the trial ends. No charges will be made during the trial period.' />
      <GradientButton onPress={()=>router.replace('/(private)/(tabs)')} className='w-full' text='Start Exploring' />
      <OutlineButton className='w-full' text='Manage Subscription' />
    </View>
  )
}

export default TrialComp