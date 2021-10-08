import styled from 'styled-components'
import ItemList from '../components/ItemList'
import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai'

const StyledMenuPage = styled.div`
  width: 100vw;
  max-width: 450px;
  min-height: 100vh;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    button {
      font-size: 2rem;
    }
  }
`

export default function MenuPage() {
  return (
    <StyledMenuPage>
      <header>
        <button><AiOutlineClose /></button>
        <h2>시술메뉴</h2>
        <button><AiOutlinePlus /></button>
      </header>
      <ItemList />
    </StyledMenuPage>
  )
}
