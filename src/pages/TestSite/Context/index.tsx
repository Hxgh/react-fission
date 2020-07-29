import React from 'react';
import Son from './Son';
interface Props {}
interface State {}

export const { Provider, Consumer } = React.createContext(
  'contextDefaultValue'
);

const Context: React.FC<Props> = (props: Props) => {
  // const [value, setValue] = React.useState('defaultValue');
  // React.useEffect(() => {});
  return (
    <div>
      <Provider value={'Context需要被传的值'}>
        <Son />
      </Provider>
    </div>
  );
};
export default Context;
