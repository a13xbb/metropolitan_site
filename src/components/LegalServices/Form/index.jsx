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
  let [nameValue, setNameValue] = useState("");
  let [phoneValue, setPhoneValue] = useState("");
  let [emailValue, setEmailValue] = useState("");

  const inputsData = [
    {
      name: "name",
      placeholder: "Имя*",
      value: nameValue,
      onChange: (event) => setNameValue(event.target.value),
    },
    {
      name: "phone",
      placeholder: "Телефон*",
      value: phoneValue,
      onChange: (event) => setPhoneValue(event.target.value),
    },
    {
      name: "email",
      placeholder: "E-Mail",
      value: emailValue,
      onChange: (event) => setEmailValue(event.target.value),
    },
  ];

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
        {inputsData.map((item, index) => (
          <Form.Item name={item.name} className={styles.form_item} key={index}>
            <>
              <span
                className={clsx(
                  styles.label,
                  (activeInput === item.name || item.value != "") &&
                    styles.label_active
                )}
              >
                {item.placeholder}
              </span>
              <Input
                className={styles.input}
                onFocus={() => setActiveInput(item.name)}
                onBlur={() => setActiveInput("none")}
                onChange={item.onChange}
              />
            </>
          </Form.Item>
        ))}

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
      <img
        className={styles.wave_image}
        src="https://metropolitan.realestate/wp-content/themes/framework/assets/images/PAttern3.svg"
        alt=""
      />
    </div>
  );
};
