import React from 'react'
import { TABS } from '../redux/actions/type'
import { useDispatch } from 'react-redux'
import { toggletab} from '../redux/actions'

const Tabs = ({currentTab}) => {
    const dispatch = useDispatch();
  return (
    TABS.map(
        tab=>(
            <button className={ tab === currentTab ? "button selected":"button"}
             onClick={()=>dispatch(toggletab(tab))} 
            >
                {tab}
            </button>
        ))
  )
}

export default Tabs