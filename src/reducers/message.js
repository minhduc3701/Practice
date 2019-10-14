import * as Messages from "../constants/Message";
import * as Types from "../constants/ActionTypes";

let inititalState = Messages.MSG_WELCOME;

const message = (state = inititalState, action) => {
  switch (action.type) {
    case Types.CHANGE_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export default message;
