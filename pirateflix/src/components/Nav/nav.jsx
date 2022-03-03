import { React } from 'react';
import { Nav, Logo } from '../../pages/Main/styles';

function NavComponent(onLogout) {
  return (
    <Nav>
      <Logo>SisRepo</Logo>
      <button type="button" onClick={onLogout}>Sair</button>
    </Nav>
  );
}

export default NavComponent;