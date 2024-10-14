import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './style.css'
import SliderSplide from './splideSlide/SliderSplide';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabHome() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="АЗС" {...a11yProps(0)} className='active-tab btn-tab'/>
          <Tab label="Мобильная заправка" {...a11yProps(1)} />
          <Tab label="Доставка" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel className="hh" value={value} index={0}>
        
        <div className='cards'>
                <SliderSplide ></SliderSplide>
            
        </div>
      </CustomTabPanel>
      <CustomTabPanel className="hh" value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel className="hh" value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
