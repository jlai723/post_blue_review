import styled from 'styled-components';
import './App.css';

import { Header, Footer } from './common';

function App() {
  const Body = styled.div`
  height: 100%;
  `
  return (
    <Body>
      <Header display="Hello" />
      "Test"
      <Footer display="Footer" />
    </Body>
  );
}

export default App;
