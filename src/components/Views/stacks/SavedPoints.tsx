import { View, Text } from 'react-native'
import Wrapper from '../../shared/Wrapper'
import DropDownSelect from '../../misc/stacks/savedPoints/DropDownSelect'

const SavedPoints = () => {
  return (
    <Wrapper header='Saved Points' compStyle='p-0 gap-4' >
        <DropDownSelect/>
    </Wrapper>
  )
}

export default SavedPoints