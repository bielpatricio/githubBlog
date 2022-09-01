import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  /* padding: 2rem 0; */
  justify-content: space-between;
  width: 100%;
  height: 18.5rem;
  background-color: ${(props) => props.theme['base-profile']};
`

export const Logo = styled.img`
  display: flex;
  margin-top: -6rem;
  margin-left: -2rem;
`
