import {handleActions} from 'redux-actions'
import * as TYPES from '../actions/types'

export default handleActions({
  [TYPES.TEST_SYNC]: (state, action) => {
    return Object.assign({}, state, {
      arr: [...state.test, ...action.payload]
    })
  },
  [TYPES.TEST_ASYNC]: {
    next(state, action) {
      return Object.assign({}, state, {
        arr: [...state.test, ...action.payload.value]
      })
    },
    throw(state, action) {
      return Object.assign({}, state)
    }
  }
}, {
  arr: []
})