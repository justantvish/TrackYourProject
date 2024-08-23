import React from "react";

type Props = {
    children: React.ReactNode | Iterable<React.ReactNode>;
    taskState: string;
};

const BoardColumn:React.FC<Props> = ({children, taskState}) => {
    return (
        <div className="col" data-taskstate={taskState}>
            {children}
        </div>
    );
}

export default BoardColumn;