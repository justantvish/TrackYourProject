import classes from './Card.module.scss';

type CardProps = {
    title: string;
    description?: string;
}

const Card: React.FC<CardProps> = ({title, description}) => {

    return (
        <div className={classes.card}>
            <div className={classes.title}>{title}</div>
            {description && <div className={classes.description}>{description}</div>}
        </div>
    );
};

export default Card;