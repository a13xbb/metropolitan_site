import { Link } from "react-router-dom";
import { Popover as AntdPopover } from "antd";

import styles from './Popover.module.scss';

export const Popover = ({children, items, ...rest}) => {
    return (
        <AntdPopover placement="bottomLeft"
                     overlayClassName={styles.popover_wrap}
                     arrow={false}
                     content={items.map((item, index) => (
                        <Link key={index} to='/'><p><span>{item}</span></p></Link>
                     ))}
                     {...rest}>
            {children}
        </AntdPopover>
    )
}