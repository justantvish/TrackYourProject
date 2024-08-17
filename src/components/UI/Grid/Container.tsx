import React from "react";

type Props = {
    children: React.ReactNode | Iterable<React.ReactNode>;
    containerClass: string;
};

const Container:React.FC<Props>  = ({containerClass, children}) => {

    return (
        <div className={containerClass}>{children}</div>
    );
};

export default Container;