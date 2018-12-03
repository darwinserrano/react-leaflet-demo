import { SET_MAP } from "./map-action-types";

const initialState = {
  map: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_MAP:
      return { ...state, ...payload }

    default:
      return state
  }
}
