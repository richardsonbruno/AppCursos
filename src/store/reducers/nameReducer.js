const INITIAL_STATE = {
  name: "",
};

export default function nameReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.name };

    default:
      return state;
  }
}
