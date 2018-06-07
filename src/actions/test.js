import {createAction} from 'redux-actions'
import * as TYPES from './types'

export let testSync = createAction(TYPES.TEST_SYNC)

export let testAsync = createAction(TYPES.TEST_ASYNC, (val) =>
  (async () => {
    let value = await Promise.resolve([...val, 'async'])
    return {
      value
    }
  })()
)