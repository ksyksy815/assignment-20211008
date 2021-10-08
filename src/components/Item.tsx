import { useState } from 'react'
import styled from 'styled-components'
import { BsPen } from 'react-icons/bs'
import { AiOutlineCheck } from 'react-icons/ai'

const StyledItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    row-gap: 0.5rem;
  }

  .item-name {
    display: flex;
    flex-direction: row;
  }
`

export default function Item() {
  const [checked, setChecked] = useState(false)

  const handleCheck = (): void => {
    setChecked(!checked)
  }

  return (
    <StyledItem>
      <div>
        <span className="item-name">
          <h3>여성컷</h3>
          <button><BsPen /></button>
        </span>
        <span>30,000원, 30분</span>
      </div>
      <div>
        <AiOutlineCheck />
      </div>
    </StyledItem>
  )
}
