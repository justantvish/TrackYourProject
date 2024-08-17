type Props = {
    children: React.ReactNode | Iterable<React.ReactNode>;
    rowClass: string;
};

const Row:React.FC<Props>  = ({children, rowClass}) => {
    return (
        <div className={rowClass}>{children}</div>
    );
};

export default Row;
