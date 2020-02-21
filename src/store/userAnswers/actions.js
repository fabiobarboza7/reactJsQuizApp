export const addToAnswerList = answer => {
  return {
    type: 'ADD_TO_ANSWER_LIST',
    answer,
  };
};

export const resetAnswerList = () => {
  return {
    type: 'RESET_ANSWER_LIST',
  };
};
