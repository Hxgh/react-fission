const nums = (state = {}, action: any) => {
  switch (action.type) {
    case 'SET_NUM':
      return action.num * 2 - 1;
    default:
      return state;
  }
};

export default nums;
