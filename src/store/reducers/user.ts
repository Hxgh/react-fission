export const counter = (state = { count: 0 }, action: any) => {
  switch (action.type) {
    case 'SET_NUM':
      return { count: action.num };
    default:
      return state;
  }
};