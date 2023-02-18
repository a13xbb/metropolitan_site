import { RequestForm } from "./Form";

import styles from "./LegalServices.module.scss";

export const LegalServices = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form_wrapper}>
        <RequestForm />
      </div>
    </div>
  );
};
