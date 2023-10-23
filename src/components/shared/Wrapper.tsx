import { FC } from "react";
/**DEfining a functional component for the layout */
const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 bg-slate-50">{children}</div>
  );
};

export default Wrapper;
