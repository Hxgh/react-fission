const nums = (state = { num: 0 }, action: any) => {
  const num = state.num;
  switch (action.type) {
    case 'SET_NUM':
      return { num: num + 1 };
    default:
      return state;
  }
};

export default nums;
