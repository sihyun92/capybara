import styles from "@components/Button/Button.module.scss";
import { ButtonProps } from "@interface/index";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Button({ ...rest }: ButtonProps) {
  return (
    <button
      className={cx(
        "block",
        rest.background && `bg-${rest.background}`,
        rest.color && `text-${rest.color}`,
        rest.size,
        rest.disabled && `disabled-default`,
      )}
      disabled={rest.disabled}
      {...rest}
    />
  );
}
