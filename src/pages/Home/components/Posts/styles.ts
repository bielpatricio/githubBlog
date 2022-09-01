import styled from 'styled-components'

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5rem 0rem 2rem 0rem;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`
export const SearchHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > h2 {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 18px;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > span {
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme['base-span']};
  }
`
export const SearchForm = styled.form`
  display: flex;
  padding: 0.5rem 0;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    box-shadow: none;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    :focus {
      outline: 0;
      /* box-shadow: 0 0 0 2px ${(props) => props.theme['blue-active']}; */
      border: 1px solid ${(props) => props.theme['blue-active']};
    }
  }
`
export const PostContainer = styled.div`
  display: flex;
  /* gap: 0.5rem; */
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`
