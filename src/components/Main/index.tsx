import { Search } from './Search'
import { Tasks } from './Tasks'
import { useState } from 'react'

import styles from './styles.module.scss'

export interface TaskType {
    id: number;
    content: string;
    isChecked: boolean;
}

export function Main() {
    const [tasks, setTasks] = useState<TaskType[]>([])
    const [countId, setCountId] = useState(0)

    function deleteTask(taskId: number) {
        setTasks((tasks) => {
            return tasks.filter((task) => {
                return task.id !== taskId
            })
        })
    }

    function addTask(content: string) {
        setTasks((tasks) => {
            setCountId((countId) => countId + 1)

            const newTask = {
                id: countId,
                content,
                isChecked: false
            }

            return [newTask, ...tasks]
        })
    }

    function toggleChecking(id: number) {
        setTasks(tasks => {
            const changedTasks = tasks.map(task => {
                if (task.id === id) return { ...task, isChecked: !task.isChecked }

                return task
            })

            return changedTasks
        })

    }

    return (
        <main className={styles.principal}>
            <Search onAddTask={addTask} />
            <Tasks tasks={tasks} deleteTask={deleteTask} toggleChecking={toggleChecking} />
        </main>
    )
}