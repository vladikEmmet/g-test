import React, {FC} from 'react';
import styles from "./Card.module.scss";
import Image, {ImageProps, StaticImageData} from "next/image";
import Link from "next/link";


interface CardProps {
    image: StaticImageData;
    title: string;
    url: string;
}

export const Card: FC<CardProps> = ({image, title, url}) => {
    return (
        <Link href={url} className={styles.link}>
            <div className={styles.container}>
                <Image src={image} alt={title} height={200} width={250}/>
                <h3>{title}</h3>
            </div>
        </Link>
    );
};