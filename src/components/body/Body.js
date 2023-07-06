import styles from './Body.module.css';
import Card from './Card/Card';
import dataList from './Data';
import React, {useState} from 'react';

function Body(){
    const [ data, setData ] = useState(dataList);
    
    return(
        <div className={styles.body}>
            {
                data.map((card) => {
                    return(
                        <Card 
                            name = {card.name}
                            description = {card.description}
                            tagColor = {card.tagColor}
                            githubLink = {card.githubLink}
                        />
                    )
                })
            }
        </div>
    )
}

export default Body;