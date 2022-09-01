import styled from 'styled-components'

export const PostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 56rem;
`
export const PostHeader = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-post']};
  width: 100%;
  padding: 0 2rem;
  height: 13.25rem;
  /* left: calc(50% - 864px / 2);
  top: 208px; */

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin-top: -6rem;
  padding: 2rem;
  gap: 1.5rem;

  > h1 {
    font-size: 1.5rem;
    font-family: 'Nunito';
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
  }

  > span {
    font-size: 1rem;
    font-family: 'Nunito';
    font-weight: 400;
    color: ${(props) => props.theme['base-span']};
  }
`
export const LinkContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`
export const BioHeader = styled.header`
  display: flex;
  justify-content: space-between;
`
export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme['blue-active']};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  > svg {
    color: ${(props) => props.theme['blue-active']};
    text-decoration: underline;
  }
`
export const Infos = styled.div`
  display: flex;
  gap: 1.5rem;
`
export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > h3 {
    font-size: 1rem;
    font-family: 'Nunito';
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > svg {
    opacity: 50%;
  }
`
