import { FC } from "react";
/**DEfining a functional component for the layout */
const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export default Wrapper;
