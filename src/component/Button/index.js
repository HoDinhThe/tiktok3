//45
import clsx from 'clsx'
import styles from './Buton.module.scss'

// classnames
// clsx

function Button({ primary, disabled }){
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.disabled]: disabled,
        //'d-flex': true
    })
    return(
        // <>
        //     <button className={styles.btn}>Click me!</button>
        //     <button className={clsx(styles.btn, {
        //         [styles.active]: true
        //     })}>Click me!</button>
        // </>
        <button className={classes}>
            Click me!
        </button>

    )
}
export default Button