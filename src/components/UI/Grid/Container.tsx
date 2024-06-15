import React from "react";

type Props = {
    children: React.ReactNode | Iterable<React.ReactNode>;
    optionalClass: string
};

const Container:React.FC<Props>  = ({optionalClass, children}) => {

    return (
        <div className={optionalClass}>{children}</div>
    );
};

export default Container;