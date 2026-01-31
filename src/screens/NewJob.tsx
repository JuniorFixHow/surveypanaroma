import MainContainer from '../components/shared/MainContainer'
import NewJobComp from '../components/Views/stacks/NewJobComp'

const NewJob = () => {
  return (
    <MainContainer showStatusBar={false} className='pb-8 m-0 p-0' >
        <NewJobComp/>
    </MainContainer>
  )
}

export default NewJob