import { RequestForm } from "../UI";
import { Description } from "./Description";

import styles from "./LegalServices.module.scss";

export const LegalServices = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <div className={styles.form_wrapper}>
        <Description />
        <RequestForm />
      </div>
    </div>
  );
};
