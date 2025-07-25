import React from "react";
import "./styles.css";
import { Button, Divider, Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme"; 

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="landingcontainer">
        
        {/* Heading Section */}
        <div>
          The Url Shortener You will <br /> Ever Need !!!!!!!!!!!
        </div>
        
        {/* URL Input Section */}
        <div className="urlcontainer">
          <input
            type="url"
            className="url"
            placeholder="Enter a Loooooong URL"
          />
          <Button variant="contained">Shorten !!!!!!</Button>
        </div>

       
        <div className="accordion">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>

          
          <Divider sx={{ backgroundColor: "white", my: 1 }} />

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Divider sx={{ backgroundColor: "white", my: 1 }} />
        </div>

      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
