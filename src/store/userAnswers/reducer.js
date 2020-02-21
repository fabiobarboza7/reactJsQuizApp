const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TO_ANSWER_LIST':
      return [...state, action.answer];

    case 'RESET_ANSWER_LIST':
      return [];

    default:
      return state;
  }
};
