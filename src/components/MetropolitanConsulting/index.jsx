import { Card } from "./Card";
import { cardsData } from "./constants";

import styles from "./MetropolitanConsulting.module.scss";

export const MetropolitanConsulting = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.blue_line}></div>
        <h1>Metropolitan Consulting</h1>
        <div className={styles.blue_line}></div>
      </div>
      <div className={styles.cards_wrapper}>
        <div className={styles.cards}>
          {cardsData.map((item, index) => (
            <Card
              key={index}
              className={styles.card}
              src={item.src}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
