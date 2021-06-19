import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
         <SidebarLink href="#hero">Home</SidebarLink>          
        <SidebarLink href='#product'>Mais Pedidas</SidebarLink>
        <SidebarLink href='#feature'>Promoção</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute href='/Size'>Peça Agora</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
