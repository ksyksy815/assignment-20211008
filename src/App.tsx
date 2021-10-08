import {GlobalStyle } from './styles/globalStyle'
import MenuPage from './pages/MenuPage'
import styled from 'styled-components'

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
`

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <div className="App">
        <MenuPage />
      </div>
    </StyledApp>
  );
}

export default App;
