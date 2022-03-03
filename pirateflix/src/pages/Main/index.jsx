import { React } from 'react';

import { Container, Repositories, Title, List, Item } from './styles';

import NavComponent from '../../components/Nav/nav';
import SearchComponent from '../../components/Search/search';

function Main() {
  const handleLogout = () => {
    console.log("logout");
  }

  const handleSearch = (query) => {
    console.log('query', query);
  }

  return (
    <Container>
      
      <NavComponent onLogout={handleLogout} />
      <SearchComponent onSearch={handleSearch}/>

      <Repositories>
        <Title>Repositórios</Title>

        <List>
          <Item>
            <div className='info'>
              <div className='owner'>Facebook</div>
              <div className="name">React</div>
            </div>
            <button type="button">Apagar</button>
          </Item>
          <Item>
            <div className='info'>
              <div className='owner'>Facebook</div>
              <div className="name">React-Native</div>
            </div>
            <button type="button">Apagar</button>
          </Item>
        </List>
      </Repositories>
    </Container>

    // <Container>
    //   <img
    //     src="https://devsamurai-materials.s3.amazonaws.com/templates/dev-samurai-white.png"
    //     height="256"
    //     alt="Dev Samurai"
    //   />
    //   <h1>Fala Samurai!</h1>
    //   <p>Esse é o template básico da Dev Samurai para React.</p>
    // </Container>
  );
}

export default Main;
