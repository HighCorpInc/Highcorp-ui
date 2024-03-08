import React from "react";

import "./Button.scss";

export interface ButtonProps extends React.ComponentProps<"button"> { kind?: "primary" | "secondary"; }

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ kind = "primary", ...props }, ref) => {
    return <button data-button={`kind:${kind}`} ref={ref} {...props} />;
  },
);