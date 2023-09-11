const initialState = {};

export const FetchData = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "FETCH_ITEM":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
