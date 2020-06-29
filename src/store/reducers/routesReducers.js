const INITIAL_STATE = {
  route: "Home",
};

export default function routesReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_HOME":
      return { route: "Home" };

    case "UPDATE_SECTION":
      return { route: "Section" };

    default:
      return state;
  }
}
