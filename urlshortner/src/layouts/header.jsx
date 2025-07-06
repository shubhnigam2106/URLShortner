import React from "react";
import { useNavigate } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";


const Header = ({ isDarkMode, toggleMode }) => {
  const navigate = useNavigate();
  const user = true;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="container">
      <span>Url Shortener</span>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {!user ? (
          <>
            <button
              className="loginbtn"
              id="btn"
              onClick={() => navigate("/auth")}
            >
              Login
            </button>
            <button id="btn" onClick={() => navigate("/register")}>
              Register
            </button>
          </>
        ) : (
          <>
            <Avatar
              onClick={handleClick}
              sx={{ bgcolor: deepOrange[500], cursor: "pointer" }}
            >
              N
            </Avatar>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </>
        )}

        <button id="btn" onClick={toggleMode}>
          {isDarkMode ? <LightModeRoundedIcon /> : <DarkModeIcon />}
        </button>
      </div>
    </div>
  );
};

export default Header;
