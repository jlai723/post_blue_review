// System imports

// Package imports
import styled from 'styled-components';
import './App.css';
// Our code imports
import { Header, Footer } from './common';
import { Search } from './search';

function App() {
  const Body = styled.div`
  height: 100%;
  `
  return (
    <Body>
      <Header display="Hello" />
      <Search />
      <Footer display="Footer" />
    </Body>
  );
}

export default App;
