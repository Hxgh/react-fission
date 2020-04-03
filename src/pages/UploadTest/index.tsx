import React, { Component } from 'react';

import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface Props {}
interface State {
  fileList: any;
}

class UploadTest extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'http://www.baidu.com/xxx.png'
        }
      ]
    };

    // 绑定 this
    // this.removeToken = this.removeToken.bind(this);
  }
  handleChange(info: any){
    let fileList = [...info.fileList];
    fileList = fileList.slice(-2);
    fileList = fileList.map(file => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });

    this.setState({ fileList });
  };

  render() {
    const props = {
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange: this.handleChange,
      multiple: true
    };
    return (
      <Upload {...props} fileList={this.state.fileList}>
        <Button>
          <UploadOutlined /> Upload
        </Button>
      </Upload>
    );
  }
}

export default UploadTest;
