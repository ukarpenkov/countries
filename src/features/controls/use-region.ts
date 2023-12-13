import { useSelector, useDispatch } from 'react-redux'

import { setRegion } from './controls-slice'
import { selectRegion } from './controls-selectors'
import { useAppDispatch } from 'store'

export const useRegion = () => {
  const dispatch = useAppDispatch()
  const region = useSelector(selectRegion)

  const handleSelect = (reg) => {
    dispatch(setRegion(reg?.value || ''))
  }

  return [region, handleSelect]
}
