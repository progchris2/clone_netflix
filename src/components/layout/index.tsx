import React, { ReactNode } from 'react';

export interface ILayout {
    children: ReactNode;
}

const LayoutContainer = ({ children }: ILayout) => {
    return <div className="App">{children}</div>;
};

export default LayoutContainer;
