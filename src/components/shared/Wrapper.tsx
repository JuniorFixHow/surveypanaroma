import { View } from 'react-native'
import MainContainer from './MainContainer'
import TopItems from '../misc/TopItems'
import { twMerge } from 'tailwind-merge'
import { styles } from '../../utils/styles'
import { ReactNode } from 'react'

type WrapperProps = {
    children: ReactNode;
    header: string;
    showStatusBar?: boolean;
    mainStyle?: string;
    innerStyle?: string;
    headerStyle?: string;
    titleStyle?: string;
    compStyle?: string;
} & React.ComponentProps<typeof MainContainer>

const Wrapper = ({children, header, compStyle, showStatusBar=false, mainStyle, innerStyle, headerStyle, titleStyle, ...props}: WrapperProps) => {
  return (
    <MainContainer {...props} showStatusBar={showStatusBar} className={twMerge('pb-8 m-0 p-0', mainStyle)} >
        <View className={twMerge(styles.screenContainer, 'h-full mt-0', innerStyle)} >
            <TopItems title={header} className={headerStyle} textStyle={titleStyle} />
            <View className={twMerge('px-4 flex flex-col', compStyle)} >
                {children}
            </View>
        </View>
    </MainContainer>
  )
}

export default Wrapper