import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import clsx from "clsx";

import styles from "./Form.module.scss";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const RequestForm = (props) => {
  let [isCheckboxChecked, setIsCheckboxChecked] = useState(true);

  const toggleCheckBox = () => {
    setIsCheckboxChecked((isCheckboxChecked) => !isCheckboxChecked);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Оставить заявку</h1>
      <Form
        name="basic"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
          className={styles.form_item}
        >
          <Input placeholder="Имя*" className={styles.input} />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          rules={[{ required: true, message: "Please input your password!" }]}
          className={styles.form_item}
        >
          <Input placeholder="Телефон*" className={styles.input} />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: false, message: "Please input your password!" }]}
          className={styles.form_item}
        >
          <Input placeholder="E-Mail" className={styles.input} />
        </Form.Item>

        <Form.Item name="agree" valuePropName="checked">
          <div className={styles.checkbox_wrapper} onClick={toggleCheckBox}>
            <div
              className={styles.checkbox}
              data-checked={isCheckboxChecked}
            ></div>
            <span className={styles.text}>
              Я принимаю условия
              <br />
              пользовательского соглашения и политики конфиденциальности
            </span>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.submit_btn}
          >
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
