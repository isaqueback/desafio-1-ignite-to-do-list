// import { NoTasks } from './NoTasks'
import { Task } from './Task'

import styles from './styles.module.scss'

export function Tasks() {
    return (
        <div className={styles.tasks}>
            <header>
                <div className={styles.createdTasks}>
                    <span>Tarefas criadas</span>
                    <span>0</span>
                </div>

                <div className={styles.concludedTasks}>
                    <span>Concluídas</span>
                    <span>20 de 500</span>
                </div>
            </header>

            <div className={styles.taskList}>
                {/* <NoTasks /> */}
                <Task />
            </div>
        </div>
    )
}