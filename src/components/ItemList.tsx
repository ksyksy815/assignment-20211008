import React from 'react'
import styled from 'styled-components'
import CategoryList from './CategoryList'

const StyledItemList = styled.ul`
  flex: 1 1 auto;
  list-style: none;
  
  li {
    display: flex;
    width: 100%;
    row-gap: 1rem;
  }
`

export default function ItemList() {
  

  return (
    <StyledItemList>
      <li>
        <CategoryList category={"커트"} type={"바버, 헤어"} />
      </li>
      <li>
        <CategoryList category={"드라이"} type={"헤어"}/>
      </li>
      <li>
        <CategoryList category={"펌"} type={"바버, 헤어"}/>
      </li>
    </StyledItemList>
  )
}
