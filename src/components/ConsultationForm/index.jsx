import { RequestForm } from "../UI";

import styles from "./ConsultationForm.module.scss";

export const ConsultationForm = () => {
  return (
    <div className={styles.form_wrapper}>
      <RequestForm
        className={styles.form}
        title="Получить бесплатную
             консультацию"
      />
    </div>
  );
};
