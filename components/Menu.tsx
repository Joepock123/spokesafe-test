import * as React from "react";
import Button from "@mui/material/Button";
import MenuMui from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

const Menu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
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
            <a>Profile</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="bookings/Booking">
            <a>Booking</a>
          </Link>
        </MenuItem>
      </MenuMui>
    </div>
  );
};

export default Menu;
