import React from 'react';
interface Props {}
interface State {}

const Refs: React.FC<Props> = (props: Props) => {
  // const [value, setValue] = React.useState('defaultValue');
  // React.useEffect(() => {});
  const ref: any = React.createRef();

  return (
    <div>
      <button ref={ref}>按我</button>
    </div>
  );
};
export default Refs;
