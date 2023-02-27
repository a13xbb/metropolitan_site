import styles from "./BusinessSupport.module.scss";

import { Card } from "./Card";
import { cardsData, longText } from "./constants";

export const BusinessSupport = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.blue_line}></div>
        <h1>Поддержка бизнеса</h1>
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
      <div className={styles.text_block}>
        {longText.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
