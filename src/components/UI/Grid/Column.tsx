type Props = {
    children: React.ReactNode | Iterable<React.ReactNode>;
};

const Column:React.FC<Props>  = ({children}) => {
    return (
        <div className="">{children}</div>
    );
};

export default Column;
