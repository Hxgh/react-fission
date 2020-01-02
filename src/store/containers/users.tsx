import React from 'react';
import { connect } from 'react-redux';
// import { setUser } from '../actions';

interface UserUIOption {
  (user: any, onClick: any): any;
}

let UserUI: UserUIOption;
UserUI = function(user: any, onClick: any) {
  return <span onClick={onClick}>{user}</span>;
};

interface MapDispatchToPropsOption {
  (state: any, ownProps: any): Object;
}

interface MapStateToPropsOption {
  (dispatch: any): Object;
}

let mapStateToProps: MapDispatchToPropsOption;
mapStateToProps = function(state: any, ownProps: any) {
  return {
    active: state === ownProps
  };
};

let mapDispatchToProps: MapStateToPropsOption;
mapDispatchToProps = function(dispatch: any) {
  return {
    // onClick: () => dispatch(setUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserUI);
