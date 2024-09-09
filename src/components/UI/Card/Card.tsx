import { useDrag } from 'react-dnd'

import classes from './Card.module.scss';

type CardProps = {
    title: string;
    description?: string;
}

const Card: React.FC<CardProps> = ({title, description}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'taskCard',
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));

    const opacity = isDragging ? 0.4 : 1

    return (
        <div className={classes.card} ref={drag} style={{ opacity }}>
            <div className={classes.title}>{title}</div>
            <div className={classes.body}>
                {description && <div className={classes.description}>{description}</div>}
            </div>
        </div>
    );
};

export default Card;