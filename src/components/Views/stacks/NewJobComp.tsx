import { View } from 'react-native'
import Wrapper from '../../shared/Wrapper'
import InputWithLabel from '../../shared/inputs/InputWithLabel'
import OutlineButton from '../../shared/buttons/OutlineButton'
import PrimaryButton from '../../shared/buttons/PrimaryButton'
import { useRouter } from 'expo-router'

const NewJobComp = () => {
  const router = useRouter();
  return (
    <Wrapper header='New Job' mainStyle='h-screen' contentContainerClassName='flex h-full flex-col' showStatusBar={false} compStyle='p-0 gap-4' >
      <View className='flex flex-col h-[92%] justify-between' >
        <View className='flex p-4 m-4 gap-6 bg-white rounded-lg border border-[#E5E7EB]' >
          <InputWithLabel label='Job Name' placeholder='Enter job name' />
          <InputWithLabel style={{textAlignVertical:'top'}} className='h-24' multiline={true} numberOfLines={3} label='Description' placeholder='Add job description (optional)' />
        </View>
        <View className='flex flex-row justify-between p-4 items-center bg-white border-y border-[#E5E7EB]' >
          <OutlineButton onPress={()=>router.back()} text='Cancel' className='w-[48%] py-2.5 bg-[#F3F4F6]' />
          <PrimaryButton text='Create Job' className='w-[48%] py-2.5' />
        </View>
      </View>
    </Wrapper>
  )
}

export default NewJobComp