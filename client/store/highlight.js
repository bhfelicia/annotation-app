import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'

//action type
const GET_HIGHLIGHTED = 'GET_HIGHLIGHTED'

//action creator
export const getHighlighted = highlights => ({
  type: GET_HIGHLIGHTED,
  highlights
})

//initial state
const initialState = {

    text: '',
    selection: '',
    anchorNode: '?',
    focusNode: '?',
    selectionStart: '?',
    selectionEnd: '?',
    first: '',
    middle: '',
    last: '',
    selected: {}
}

//thunk

//reducer
export function highlightReducer (state = initialState, action) {
  switch (action.type) {
    case GET_HIGHLIGHTED:
    return {...state, selected: action.highlights.selected}
    default:
      return state
  }
}

const highlightStore = createStore(
  highlightReducer,
  applyMiddleware(loggerMiddleware)
)

export default highlightStore
