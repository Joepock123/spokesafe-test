import * as React from "react";
import ButtonMui from "@mui/material/Button";

const Button = ({
  variant,
  children,
}: {
  variant: "text" | "contained" | "outlined";
  children: React.ReactNode;
}) => {
  return <ButtonMui variant={variant}>{children}</ButtonMui>;
};

export default Button;
