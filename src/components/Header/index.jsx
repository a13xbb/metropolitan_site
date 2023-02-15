import clsx from "clsx";
import { Link } from "react-router-dom";

import { Popover } from "../../components";
import { menuItems } from "./constants";

import styles from "./Header.module.scss";

export const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to='/'>
          <img
            className={styles.logo}
            src="https://metropolitan.realestate/wp-content/uploads/2020/11/mpd-black-logo.svg"
            alt="logo"
          />
        </Link>

        <ul className={styles.menu}>
          {menuItems.map(({label, withPopover, popoverItems}, index) => {
            if (withPopover) {
              return (
                <Popover key={index} items={popoverItems}>
                  <Link key={index} to='/'>
                    <li className={clsx(styles.menu_item, styles.menu_item_with_popover)}>{label}</li>
                  </Link>
                </Popover>
              )
            } else {
              return (
                <Link key={index} to='/'>
                    <li className={styles.menu_item}>{label}</li>
                </Link>
              )
            }
        
          })}
          <Link to='/'>
            <li className={clsx(styles.menu_item, styles.menu_item_with_popover)}>
              <img src="https://metropolitan.realestate/wp-content/plugins/sitepress-multilingual-cms/res/flags/ru.png"
                alt="flag" className={styles.flag} />
              <span>RU</span>
            </li>
          </Link>
        </ul>
        <button className={styles.heart_btn}></button>
        <button className={styles.whatsapp_btn}></button>
        <p className={styles.number}>+971 44 286 15 2</p>
      </div>
    </header>
  );
};
