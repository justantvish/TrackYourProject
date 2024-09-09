import { TaskCard } from '../../intefaces/task-card';
import BoardColumn from '../BoardColumn/BoardColumn';
import Card from '../UI/Card/Card';
import Container from '../UI/Grid/Container';
import styles from './Board.module.scss';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const tasks: TaskCard[] = [
    {
        title: 'Title1',
        taskState: 'to_do'
    },
    {
        title: 'Title2',
        taskState: 'done'
    },
    {
        title: 'Title3',
        taskState: 'backlog'
    },
    {
        title: 'Title4',
        taskState: 'in_progress'
    }
]

const Board = () => {

    return (
        <div className={styles.board}>
            <DndProvider backend={HTML5Backend}>
                <Container containerClass="container_grid">
                    {tasks && tasks.map((task: TaskCard, i) => (
                        <BoardColumn key={i} taskState={task.taskState}>
                            <Card title={task.title} />
                        </BoardColumn>
                    ))}
                </Container>
            </DndProvider>
        </div>
    );
};

export default Board;
