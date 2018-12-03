import { LOAD_DATA, TOGGLE_ALL, TOGGLE } from "./cities-action-types";
import { DataApi } from "../../../api/DataApi";

export const loadFinish = (items) => ({
  type: LOAD_DATA,
  payload: {
    items
  }
})

export const toggleAll = (layerId) => ({
  type: TOGGLE_ALL,
  payload: {
    layerId
  }
})

export const toggle = (layerId) => ({
  type: TOGGLE,
  payload: {
    layerId
  }
})


export const loadData = () => async (dispatch) => {
  const response = await DataApi.get()
  if (response.status === 200) {
    dispatch(loadFinish(response.data))
  }
}


export const toggleAllAction = (id) => (dispatch) => {
  dispatch(toggleAll(id))
}

export const toggleAction = (id) => (dispatch) => {
  dispatch(toggle(id))
}
