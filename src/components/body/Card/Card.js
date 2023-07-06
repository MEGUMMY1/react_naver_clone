import styles from './Card.module.css';

function Card(props){
    return(
        <div className={styles.contentContainer}>            
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <div className={styles.itemContainer}>
                        <div className={styles.itemCard}>
                            <div className={styles.cardTab} style={{backgroundColor: props.tagColor}}></div>
                            <h3 className={styles.cardTitle}>{props.name}</h3>
                            <p className={styles.cardContent}>{props.description}</p>
                            <div className={styles.cardFooter}>
                                <a className={styles.cardFooterLink} href={props.githubLink}>Github ></a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Card;