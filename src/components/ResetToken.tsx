import React, { Component } from 'react';
import { getAccount } from '../api/account';
import {
  getUser,
  setToken,
  inHalfADay,
  setUser,
  getToken,
} from '../utils/auth';
interface Props {}
interface State {}
declare global {
  interface Window {
    infiniteToken: NodeJS.Timer | null;
  }
}
export default class ResetToken extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.infiniteToken();
  }
  infiniteToken() {
    let user: any = getUser();
    const { userAccount, roleId } = user;
    if (window.infiniteToken) {
      clearInterval(window.infiniteToken);
    }
    window.infiniteToken = setInterval(() => {
      if (getToken()) {
        getAccount({ userAccount, roleId }).then((res: any) => {
          if (res && res.token) {
            setToken(res.token);
            setUser(getUser());
          }
        });
      }
    }, (inHalfADay / 1.1) * 12 * 60 * 60 * 1000);
  }
  render() {
    return <div></div>;
  }
}
