type PropType = {
  children: React.ReactNode;
};

const LayoutView: React.FC<PropType> = ({ children }) => {
  return (
    <>
      <header>HEADER</header>
      <main>{children}</main>
    </>
  );
};

export default LayoutView;
