import * as React from "react";
import ButtonMui from "@mui/material/Button";

const Button = ({
  variant,
  children,
  onClick,
  href,
}: {
  variant: "text" | "contained" | "outlined";
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
}) => {
  return (
    <ButtonMui href={href} onClick={onClick} variant={variant}>
      {children}
    </ButtonMui>
  );
};

export default Button;
