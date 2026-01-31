import MainContainer from '../components/shared/MainContainer'
import LiveComp from '../components/Views/stacks/LiveComp'

const Live = () => {
  return (
    <MainContainer showStatusBar={false} className='pb-8 m-0 p-0' >
        <LiveComp/>
    </MainContainer>
  )
}

export default Live