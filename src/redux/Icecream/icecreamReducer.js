import { BUY_ICECREAM } from "./icecremTypes";

const initalState = {
  numOfIcecream: 20,
};

export const icecreamReducer = (state = initalState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        numOfIcecream:state.numOfIcecream-1
      };
      default : return state
  }
};

