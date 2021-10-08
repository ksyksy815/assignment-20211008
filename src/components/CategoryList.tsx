import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const StyledCategoryList = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  .list-category {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
  }
`

interface CategoryListProps {
  category: string
  type: string
}

export default function CategoryList( {category, type}: CategoryListProps) {
  return (
    <StyledCategoryList>
      <div className="list-category">
        <span>커트</span>
        <span>바버, 헤어</span>
      </div>
      <Item />
    </StyledCategoryList>
  )
}
