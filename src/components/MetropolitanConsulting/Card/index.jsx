import clsx from "clsx";

import styles from "./Card.module.scss";

export const Card = ({ src, title, description, className }) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.card}>
        <div className={styles.img_wrapper}>
          <img src={src} alt="icon" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
