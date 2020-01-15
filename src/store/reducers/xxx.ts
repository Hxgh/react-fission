export const xxx = (state = { count: 0 }, action: any) => {
  switch (action.type) {
    case 'SETxxx_NUM':
      return { count: action.num };
    default:
      return state;
  }
};
