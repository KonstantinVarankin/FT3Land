import React, { useState } from 'react';
import MenuBar from '../components/menu/menu';
import './../assets/QuestionStyle/style.css';
import styled from 'styled-components';
import icon1 from "./../assets/svg/Frame.svg";

const MenuItem = styled.div`
  cursor: pointer;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  background-color: ${(props) => (props.active ? '#00c244' : 'transparent')};
border-radius: ${(props) => (props.active ? 'inherit' : 'inherit')};
  border
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  font-size: 18px;
  padding-left: 20px;
  position: relative;
font-size: 20px;
                    font-weight: 600;
                    padding-left: 40px;
  &:hover {
    background-color: #00c244;
    color: #fff;
  }
  &:first-child {
  
  }
  &:last-child {
  }
  @media (max-width: 768px) {
    display: ${(props) => (props.active ? 'flex' : 'none')};
    height: 45px;
    font-size: 14px;

  }
`;



const first = styled.div`
border-radius: 24px 24px 0 0;
background-color: red;

`

const SubMenuItem = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #D9D9D9;
  padding: 24px 40px;
  color: #333;
  cursor: pointer;
  font-size: 16px;
hegth: 72px ;
  &:hover {
    background-color: #ddd;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const Breadcrumbs = styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
`;

const Header = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const SubHeader = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  color: #666;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  filter: ${(props) => (props.active ? 'brightness(0) invert(1)' : 'none')};
 
`;

const Dropdown = styled.div`
  background-color: #fff;
  &.div {
  heigth: 72px;
  }
`;

const sections = [
    { name: 'Частые вопросы о FuelTime', content: 'Частые вопросы о FuelTime' },
  { name: 'Личный кабинет', content: 'Контент личного кабинета', subItems: ['Документы', 'Документы', 'Документы'],  icon: icon1},
  { name: 'Мобильное приложение', content: 'Контент мобильного приложения', subItems: ['Документы', 'Документы', 'Документы'], icon: icon1 },
  { name: 'Документы', content: 'Контент документов', subItems: ['Документы', 'Документы', 'Документы'], icon: icon1 },
  { name: 'Оплата', content: 'Контент оплаты', subItems: ['Документы', 'Документы', 'Документы'], icon: icon1 },
  { name: 'Сотрудникам', content: 'Контент для сотрудников' , subItems: ['Документы', 'Документы', 'Документы'], icon: icon1 },
  { name: 'Обратная связь', content: 'Контент обратной связи' },
];

function Question() {
  const [activeSection, setActiveSection] = useState('Мобильное приложение');
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const toggleDropdown = (sectionName) => {
    setDropdownVisible(dropdownVisible === sectionName ? null : sectionName);
  };

  return (
    <div className="question">
      <div className='home-nav w-100 col'>
        <div className="container">
          <MenuBar />
        </div>
      </div>
      <div className="container">
        <div className='layout d-lg-flex'>
          <div className='layout-links'>
            <ul>
              {sections.map((section) => (
                <div key={section.name} className="br">
                  <MenuItem
                    className={section.class}
                    active={activeSection === section.name}
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(section.name);
                        setActiveSection(section.name)
                    }}
                    
                  >
                    
                    {section.subItems && (
                      <span onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(section.name);
                      }}>
                        
                        <Icon 
                        src={section.icon}
                        alt={section.name}
                        active={activeSection === section.name}
                        />
                        
                      </span>
                      
                    )}
                    {section.name}
                  </MenuItem>

                  {dropdownVisible === section.name && section.subItems && (
                    <Dropdown>
                      {section.subItems.map((item, index) => (
                        <SubMenuItem key={index}>{item}</SubMenuItem>
                      ))}
                    </Dropdown>
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className='layout-element'>
            <Content>
              <Breadcrumbs>Хлебные крошки • {activeSection}</Breadcrumbs>
              <Header>{activeSection}</Header>
              <SubHeader>Заголовок про {activeSection.toLowerCase()}</SubHeader>
              <p>{sections.find((section) => section.name === activeSection).content}</p>
            </Content>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
