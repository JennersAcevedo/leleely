import React from 'react';
import styles from "@/styles/gallery.module.css";

const Gallery = ({ images }) => {
    return (
        <div className={styles.gallery}>
            {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
            ))}
        </div>
    );
};

export default Gallery;