// import { TaskCard } from '../../intefaces/task-card';
// import Card from '../UI/Card/Card';
// import Column from '../UI/Grid/Column';
// import Container from '../UI/Grid/Container';
import styles from './Board.module.scss';

// const tasks = [
//     {

//     }
// ]

const Board = () => {

    return (
        <div className={styles.board}>
            {/* <Container containerClass="container_grid">
                {tasks && tasks.map((task: TaskCard, i) => (
                    <Column colClass="col" key={i} taskState={task.taskState}>
                        <Card title={task.title} />
                    </Column>
                ))}
            </Container> */}
        </div>
    );
};

export default Board;
