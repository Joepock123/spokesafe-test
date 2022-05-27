import * as React from "react";
import styled from "styled-components";

import MenuIcon from "@mui/icons-material/Menu";
import MenuMui from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Button from "./Button";
import { useUser } from "@auth0/nextjs-auth0";

const Menu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { user } = useUser();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Header>
      <Button
        variant="text"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Menu
        <StyledMenuIcon fontSize="large" />
      </Button>
      <MenuMui
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </MenuItem>
        {!!user && (
          <MenuItem onClick={handleClose}>
            <Link href="bookings/Booking">
              <a>Booking</a>
            </Link>
          </MenuItem>
        )}
        {!!user && (
          <MenuItem onClick={handleClose}>
            <Link href="/api/auth/logout">
              <a>Log out</a>
            </Link>
          </MenuItem>
        )}
      </MenuMui>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
`;

const StyledMenuIcon = styled(MenuIcon)`
  margin-left: 6px;
`;

export default Menu;
