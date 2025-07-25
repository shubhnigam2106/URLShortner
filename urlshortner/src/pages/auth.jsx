import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Auth = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="authcontainer">
      <div className="auth">
        <h1>Login / SignUp</h1>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Login" />
            <Tab label="SignUp" />
        
          </Tabs>
        </Box>

        {value === 0 && <div>Login page</div>}
        {value === 1 && <div>SignUp page</div>}
        
      </div>
    </div>
  );
};

export default Auth;
