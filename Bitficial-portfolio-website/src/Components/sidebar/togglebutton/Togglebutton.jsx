export const Togglebutton = ({ setOpen }) => {
  return <button onClick={() => setOpen((prev) => !prev)}>Togglebutton</button>;
};
