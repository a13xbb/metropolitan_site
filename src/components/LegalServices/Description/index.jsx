import styles from "./Description.module.scss";

export const Description = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blue_block}>
        <h1>Юридические услуги в ОАЭ</h1>
        <div className={styles.white_line}></div>
      </div>
      <div className={styles.description}>
        <h3>Metropolitan Consulting работает на рынке ОАЭ более 10 лет.</h3>
        <p>
          За это время компания зарекомендовала себя как надежный партнер по
          урегулированию юридических и административных вопросов наших клиентов
          в ОАЭ.
        </p>
      </div>
      <img
        className={styles.wavy_image}
        src="https://metropolitan.realestate/wp-content/themes/framework/assets/images/vpat.svg"
        alt=""
      />
    </div>
  );
};
