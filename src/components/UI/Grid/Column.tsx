type Props = {
    children: React.ReactNode | Iterable<React.ReactNode>;
    colClass: string;
};

const Column:React.FC<Props>  = ({children, colClass}) => {
    return (
        <div className={colClass}>{children}</div>
    );
};

export default Column;
