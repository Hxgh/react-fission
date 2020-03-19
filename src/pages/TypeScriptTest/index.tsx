import React, { Component } from 'react';

interface aI {
  (a: Number, b?: String, ...restOfName: string[]): Number;
}

let aF: aI;
aF = function(a: Number, b?: String, ...restOfName: string[]) {
  return 1;
};

let f2: (a: number, b?: string, ...restOfName: string[]) => number = function(
  a: number,
  b?: string,
  ...restOfName: string[]
) {
  return 1;
};
f2(12);

interface Props {}
interface State {}

class TypeScriptTest extends Component<Props, State> {
  render() {
    return <>TypeScriptTest</>;
  }
}

export default TypeScriptTest;
