import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const CheckboxAccordion = ({ options, color }) => {
  const [checkedItems, setCheckedItems] = useState(
    options?.reduce((acc, option) => ({ ...acc, [option]: false }), {})
  );

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const [selectedColors, setSelectedColors] = useState(
    options?.reduce((acc, option) => ({ ...acc, [option]: "#000000" }), {})
  );

  const handleColorChange = (event) => {
    setSelectedColors({
      ...selectedColors,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="w-full">
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col">
            {options?.map((option, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    sx={{
                      color: "#0BA42D",
                      "&.Mui-checked": {
                        color: "#0BA42D",
                      },
                      "& .MuiSvgIcon-root": {
                        borderRadius: "4px",
                        border: "2px solid #0BA42D",
                      },
                    }}
                    checked={checkedItems[option]}
                    onChange={handleCheckboxChange}
                    name={option}
                  />
                }
                label={option}
              />
            ))}
          </div>
        </AccordionDetails>
        <div className="flex"></div>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Colors</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex  flex-wrap">
            {color?.map((color, index) => (
              <div
                key={index}
                className="w-[40px] h-[40px] border rounded-full mb-2 cursor-pointer"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </AccordionDetails>
        <div className="flex"></div>
      </Accordion>
    </div>
  );
};

export default CheckboxAccordion;
