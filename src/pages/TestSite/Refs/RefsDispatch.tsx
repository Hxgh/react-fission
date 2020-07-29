import React from 'react';
interface Props {}
interface State {}

const RefButton = React.forwardRef((props: any, ref: any) => (
  <button ref={ref}>{props.children}</button>
));

const Refs: React.FC<Props> = (props: Props) => {
  // const [value, setValue] = React.useState('defaultValue');
  // React.useEffect(() => {});
  const ref = React.createRef();

  return (
    <div>
      <RefButton ref={ref}>按我</RefButton>
    </div>
  );
};
export default Refs;
