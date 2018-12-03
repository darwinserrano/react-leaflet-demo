import { LOAD_DATA, TOGGLE_ALL, TOGGLE } from "./cities-action-types";

const initialState = {
  items: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case LOAD_DATA:
      return {
        ...state,
        items: payload.items
      }
    case TOGGLE_ALL:
      return {
        ...state,
        items: state.items.map(row => (
          row.layerId === payload.layerId
            ? {
              ...row,
              isActived: !row.isActived,
              cities: row.cities.map(city => ({ ...city, isActived: !row.isActived }))
            }
            : row
        ))
      }

    case TOGGLE:
      return {
        ...state,
        items: state.items.map(item => ({
          ...item,
          cities: item.cities.map(city => (
            city.layerId === payload.layerId
              ? { ...city, isActived: !city.isActived }
              : city
          ))
        }))
      }
    default:
      return state
  }
}
