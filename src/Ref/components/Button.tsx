import React, { HTMLAttributes, Ref } from "react";
import { logProps } from "./HOC";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = React.forwardRef(
  ({ label, children, ...props }: Props, ref: Ref<HTMLButtonElement>) => {
    return (
      <button {...props} ref={ref}>
        {label}
        {children}
      </button>
    );
  }
);

export default logProps<Props, HTMLButtonElement>(Button);
/*
TODO:
logProps<Props, HTMLButtonElement> 타입 추론으로 동작하는 logPops로 바꿔보기
*/
