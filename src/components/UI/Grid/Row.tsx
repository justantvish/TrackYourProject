type Props = {
    children: React.ReactNode | Iterable<React.ReactNode>;
};

const Row:React.FC<Props>  = ({children}) => {
    return (
        <div className="">{children}</div>
    );
};

export default Row;
