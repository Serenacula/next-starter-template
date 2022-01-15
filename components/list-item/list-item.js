import styles from "./list-item.module.scss"

export default function ListItem(props) {
    const item = props.item
    
    return <div className={styles.mainDiv}>
        <h3 className={styles.title}>
            {item.name}
        </h3>
    </div>
}