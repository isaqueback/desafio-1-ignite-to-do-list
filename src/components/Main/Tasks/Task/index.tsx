import { Trash, Circle, CheckCircle } from 'phosphor-react'
import styles from './styles.module.scss'

export function Task() {
    return (
        <div className={styles.task}>
            <Circle className={styles.checkBoxUnchecked} size={19} />
            {/* <CheckCircle className={styles.checkBoxChecked} size={19} /> */}
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
            <Trash className={styles.trash} size={18} />
        </div>
    )
}