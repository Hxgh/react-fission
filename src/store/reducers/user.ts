export const counter = (state = { count: '' }, action: any) => {
  switch (action.type) {
    case 'SET_MENU_KEY':
      return { count: action.key };
    default:
      return state;
  }
};
