import { SET_MAP } from "./map-action-types";

export const setMap = (map) => ({
  type: SET_MAP,
  payload: {
    map
  }
})
