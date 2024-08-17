import classes from './Content.module.scss';

type Props = {
    children?: React.ReactNode | Iterable<React.ReactNode>;
};
  
const Content: React.FC<Props> = ({ children }) => {
    return (
        <div className={classes.content}>{children}</div>
    );
};

export default Content;