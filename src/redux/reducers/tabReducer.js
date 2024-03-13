import React from 'react'
import * as actiontypes from '../actions/type'
export const tabReducer = (state = actiontypes.ALL_TODOS,action) => {
    switch(action.type){
        case actiontypes.TOGGLE_TAB:
            return action.selected
        default:
            return state;
    }
}