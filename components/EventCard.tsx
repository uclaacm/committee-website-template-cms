import Image from 'next/image';
import React from 'react';
import styles from '../styles/EventCard.module.scss';

interface CardInterface {
    header: string;
    body: string;
    time: string;
}
function EventCard({header, body, time}: CardInterface)
{
    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.header}>{header}</div>
                <div>{body}</div>
                <p className={styles.body}>
                    <Image src = '/icons8-calendar-24.png' width={20} height={20}/>
                    {time}
                </p>
            </div>
        </div>
    );
}

export default EventCard;