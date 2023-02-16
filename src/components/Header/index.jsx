import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";

import { Popover } from "../UI";
import { menuItems, languages } from "./constants";

import styles from "./Header.module.scss";

export const Header = (props) => {
  let [curLanguage, setCurLanguage] = useState("RU");
  let curLanguageData = languages.filter(
    (item) => item.language === curLanguage
  )[0];
  let popoverLanguages = languages.filter(
    (item) => item.language !== curLanguage
  );

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/">
          <img
            className={styles.logo}
            src="https://metropolitan.realestate/wp-content/uploads/2020/11/mpd-black-logo.svg"
            alt="logo"
          />
        </Link>

        <ul className={styles.menu}>
          {menuItems.map(({ label, withPopover, popoverItems }, index) => {
            if (withPopover) {
              return (
                <Popover key={index} items={popoverItems}>
                  <Link key={index} to="/">
                    <li
                      className={clsx(
                        styles.menu_item,
                        styles.menu_item_with_popover
                      )}
                    >
                      {label}
                    </li>
                  </Link>
                </Popover>
              );
            } else {
              return (
                <Link key={index} to="/">
                  <li className={styles.menu_item}>{label}</li>
                </Link>
              );
            }
          })}
          <Popover
            setLanguage={setCurLanguage}
            type="languages"
            items={popoverLanguages}
          >
            <li
              className={clsx(
                styles.menu_item,
                styles.menu_item_with_popover,
                styles.menu_item_language
              )}
            >
              <img
                src={curLanguageData.src}
                alt={curLanguageData.alt}
                className={styles.flag}
              />
              <span>{curLanguageData.language}</span>
            </li>
          </Popover>
        </ul>
        <button className={styles.heart_btn}>
          <HeartOutlined className={styles.heart_outlined} />
        </button>
        <Link
          to="https://api.whatsapp.com/send/?phone=971543219259&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21+%D0%9C%D0%B5%D0%BD%D1%8F+%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82+%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C+https%3A%2F%2Fmetropolitan.realestate%2Fru%2Fservices%2Flegal-services-in-uae%2F.+%D0%9F%D1%80%D0%BE%D1%88%D1%83+%D0%B2%D1%8B%D1%81%D0%BB%D0%B0%D1%82%D1%8C+%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D0%B8%2C+%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA+%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D1%8B%D1%85+%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2+%D0%B8+%D1%86%D0%B5%D0%BD%D1%8B.+%D0%A1%D0%BF%D0%B0%D1%81%D0%B8%D0%B1%D0%BE%21&type=phone_number&app_absent=0"
          className={styles.whatsapp_btn}
        ></Link>
        <p className={styles.number}>+971 44 286 15 1</p>
      </div>
    </header>
  );
};
