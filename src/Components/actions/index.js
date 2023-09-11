export const fetchItem = (item) => {
  console.log(item);
  return {
    type: "FETCH_ITEM",
    payload: item,
  };
};
