import UseStateExample from 'src/app/examples/use-state/use-state';

/* eslint-disable-next-line */
export interface HooksProps {}

export function Hooks(props: HooksProps) {
  return (
    <div className="container mx-auto">
      <h1 className="mb-4">Welcome to Hooks!</h1>
      <UseStateExample />
    </div>
  );
}

export default Hooks;
