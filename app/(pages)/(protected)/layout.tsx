import React, { ReactNode } from 'react';

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default ProtectedLayout;
