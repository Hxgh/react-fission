import React, { Component } from 'react';
import styles from './styles.less';

import { Button } from 'antd';

import { connect } from 'react-redux';
import { setUser } from '../../store/actions';

interface MapDispatchToPropsOption {
  (state: any, ownProps: any): Object;
}

interface MapStateToPropsOption {
  (dispatch: any, ownProps: Object): Object;
}

let mapStateToProps: MapDispatchToPropsOption;
mapStateToProps = function(state: any, ownProps: any) {
  return {
    num: state.num
  };
};

let mapDispatchToProps: MapStateToPropsOption;
mapDispatchToProps = function(dispatch: any, ownProps: Object) {
  return {
    aaaaonClick: () => dispatch(setUser)
  };
};

class ReduxTest extends Component<any> {
  render() {
    const { num, aaaaonClick } = this.props;
    return (
      <div className={styles.redux}>
        <div>
          <span>span触发store：</span>
          <Button onClick={aaaaonClick}>改变</Button>
        </div>
        <div>
          <span>展示：</span>
          <span>{num}</span>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);
