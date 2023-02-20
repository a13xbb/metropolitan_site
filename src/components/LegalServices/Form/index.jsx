import { Fragment } from "react";
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
  let [activeInput, setActiveInput] = useState("none"); //none | name | phone | email
  console.log(activeInput);

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
        <Form.Item name="username" className={styles.form_item}>
          <>
            <span className={styles.label}>Имя*</span>
            <Input
              className={styles.input}
              onClick={() => setActiveInput("name")}
              onBlur={() => setActiveInput("none")}
            />
          </>
        </Form.Item>

        <Form.Item name="phone" className={styles.form_item}>
          <>
            <span className={styles.label}>Телефон*</span>
            <Input
              className={styles.input}
              onClick={() => setActiveInput("phone")}
              onBlur={() => setActiveInput("none")}
            />
          </>
        </Form.Item>

        <Form.Item name="email" className={styles.form_item}>
          <>
            <span className={styles.label}>E-Mail</span>
            <Input
              className={styles.input}
              onClick={() => setActiveInput("email")}
              onBlur={() => setActiveInput("none")}
            />
          </>
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
