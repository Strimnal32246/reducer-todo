export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },

  {
    item: "listen to music",
    completed: false,
    id: 3892987581
  },
  {
    item: "watch tv",
    completed: true,
    id: 3892987586
  }
];

export const toDoReducer = (state, action) => {
  switch (action.type) {
    // case 'MODIFY':
    //     return action.newArr;
    case "TOGGLE_COMPLETED":
      return state.map(item =>
        item.id === action.id ? { ...item, completed: !item.completed } : item
      );
    case "CLEAR_COMPLETED":
      return state.filter(item => item.completed === false);
    case "HANDLE_SUBMIT":
      return [action.newValue, ...state];
    default:
      return state;
  }
};
