import { NoTasks } from './NoTasks'
import { Task } from './Task'
import styles from './styles.module.scss'
import { useState } from 'react';

interface Task {
    id: number;
    content: string;
    isChecked: boolean;
}

interface TasksProps {
    tasks: Task[];
    deleteTask: (taskId: number) => void;
    toggleChecking: (taskId: number) => void;
}

export function Tasks({ tasks, deleteTask, toggleChecking }: TasksProps) {
    const concludedTaskQuantity = tasks.filter(task => task.isChecked === true).length

    return (
        <div className={styles.tasks}>
            <header>
                <div className={styles.createdTasks}>
                    <span>Tarefas criadas</span>
                    <span>{tasks.length}</span>
                </div>

                <div className={styles.concludedTasks}>
                    <span>Concluídas</span>
                    <span>{concludedTaskQuantity} de {tasks.length}</span>
                </div>
            </header>

            <div className={styles.taskList}>
                {
                    tasks.length === 0 ?
                        <NoTasks /> : (
                            tasks.map((task: Task) => {
                                return <Task key={task.id} task={task} onDeleteTask={deleteTask} onToggleChecking={toggleChecking} />
                            })
                        )
                }
            </div>
        </div>
    )
}