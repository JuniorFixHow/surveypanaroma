import MainContainer from '../components/shared/MainContainer'
import TabsHomeComp from '../components/Views/tabs/TabsHomeComp'

const TabsHome = () => {
  return (
    <MainContainer showStatusBar={false} className={'mt-0 mb-0 p-0'} >
        <TabsHomeComp/>
    </MainContainer>
  )
}

export default TabsHome