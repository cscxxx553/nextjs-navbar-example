import React, { ReactNode } from 'react';
import Navbar from './navbar/navbar'

interface IChildren {
    children: ReactNode;
}

export default function layout({children}: IChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
