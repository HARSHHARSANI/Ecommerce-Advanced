const initialState = false;

export const couponReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUPON_ADDED":
      return action.payload;
    default:
      return state;
  }
};
