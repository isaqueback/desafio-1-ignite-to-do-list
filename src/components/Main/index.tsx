import { Search } from './Search'
import { Tasks } from './Tasks'

import styles from './styles.module.scss'

export function Main() {
    return (
        <main className={styles.principal}>
            <Search />
            <Tasks />
        </main>
    )
}