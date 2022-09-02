import styled from 'styled-components'

export const PostContainer = styled.a`
  display: flex;
  flex-direction: column;
  width: 27rem;
  height: 16.5rem;
  padding: 1.5rem;
  margin: 1rem 0 1rem 0;
  gap: 1rem;
  text-decoration: none;
  cursor: pointer;

  background-color: ${(props) => props.theme['base-post']};
  color: ${(props) => props.theme['base-title']};
  border-radius: 10px;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  > span {
    width: 100%;
    overflow: hidden; /* "overflow" value must be different from "visible" */
    /* white-space: nowrap; */
    text-overflow: ellipsis;
    font-family: 'Nunito';
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    font-size: 16px;
  }
`
export const HeaderPost = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  > h1 {
    font-family: 'Nunito';
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
    font-size: 20px;
    max-width: 80%;
    text-decoration: underline;
  }

  > span {
    font-family: 'Nunito';
    color: ${(props) => props.theme['base-span']};
    font-weight: 400;
    font-size: 14px;
  }
`
