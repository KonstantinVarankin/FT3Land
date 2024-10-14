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
import plus from './../../assets/svg/plus.svg'

export default function AccordionProgram() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <h3>Сколько времени занимает регистрация в программе?</h3>
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
            <h3>Нужно ли мне покупать что-то для участия в программе?</h3>
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
            <h3>Какой минимальный переход по реферальным ссылкам нужен для первого вознаграждения?</h3>
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
            <h3>Как я буду получать свои вознаграждения?</h3>
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
            <h3>Что делать,  если клиент перестанет пользоваться сервисом?</h3>
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
