const users = (state = {}, action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: state,
        name: action.name
      };
    default:
      return state;
  }
};

export default users;
