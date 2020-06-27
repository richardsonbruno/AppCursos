const INITIAL_STATE = {
  action: "",
};

export default function menuReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };

    case "CLOSE_MENU":
      return { action: "closeMenu" };
    default:
      return state;
  }
}
