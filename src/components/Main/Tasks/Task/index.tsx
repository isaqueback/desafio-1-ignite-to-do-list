import { Trash, Circle, CheckCircle } from 'phosphor-react'
import styles from './styles.module.scss'
import { TaskType } from '../../index'

interface TaskProps {
    task: TaskType;
    onDeleteTask: (taskId: number) => void;
    onToggleChecking: (taskId: number) => void;
}

export function Task({ task, onDeleteTask, onToggleChecking }: TaskProps) {

    function handleToggleChecking() {
        onToggleChecking(task.id)
    }

    function handleDeleteTask() {
        onDeleteTask(task.id)
    }

    return (
        <div className={styles.task}>
            {
                task.isChecked ?
                    <CheckCircle className={styles.checkBoxChecked} size={19} onClick={handleToggleChecking} /> :
                    <Circle className={styles.checkBoxUnchecked} size={19} onClick={handleToggleChecking} />
            }

            <p className={task.isChecked ? styles.checked : ''}>{task.content}</p>
            <Trash className={styles.trash} size={18} onClick={handleDeleteTask} />
        </div>
    )
}