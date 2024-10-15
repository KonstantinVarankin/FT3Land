import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import './style.css'
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionHome() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h3>Нужно ли платить за регистрацию на платформе?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ДА нужно.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h3>Как я могу отслеживать свои заказы?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ДА нужно.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h3>Что делать, если топливо не доставили вовремя?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ДА нужно.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h3>Что делать если качество топлива не соответствует заявленному?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ДА нужно.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h3>Что делать, если топливо не доставили вовремя?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ДА нужно.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
