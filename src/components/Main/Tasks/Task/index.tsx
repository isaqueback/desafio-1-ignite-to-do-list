import { Trash, Circle, CheckCircle } from 'phosphor-react'
import { useState } from 'react'
import styles from './styles.module.scss'

interface Task {
    id: number;
    content: string;
    isChecked: boolean;
}

interface TaskProps {
    task: Task;
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
                !task.isChecked ?
                    <Circle className={styles.checkBoxUnchecked} size={19} onClick={handleToggleChecking} /> :
                    <CheckCircle className={styles.checkBoxChecked} size={19} onClick={handleToggleChecking} />
            }

            <p className={task.isChecked ? styles.checked : ''}>{task.content}</p>
            <Trash className={styles.trash} size={18} onClick={handleDeleteTask} />
        </div>
    )
}