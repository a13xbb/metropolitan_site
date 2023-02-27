import clsx from "clsx";

import styles from "./Card.module.scss";

export const Card = ({ src, description, className }) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.card}>
        <img src={src} alt="icon" />
        <p>{description}</p>
      </div>
    </div>
  );
};
