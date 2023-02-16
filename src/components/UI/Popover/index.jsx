import { Link } from "react-router-dom";
import { Popover as AntdPopover } from "antd";

import styles from "./Popover.module.scss";

export const Popover = ({ type = "links", children, items, ...rest }) => {
  return (
    <AntdPopover
      placement="bottomLeft"
      overlayClassName={styles.popover_wrap}
      arrow={false}
      content={items.map((item, index) => {
        if (type === "links") {
          return (
            <Link key={index} to="/">
              <p>
                <span className={styles.underlined}>{item}</span>
              </p>
            </Link>
          );
        } else if (type === "languages") {
          return (
            <p>
              <span className={styles.underlined}>
                <img src={item.src} alt={item.alt} className={styles.flag} />
                <span>{item.language}</span>
              </span>
            </p>
          );
        }
      })}
      {...rest}
    >
      {children}
    </AntdPopover>
  );
};
