import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme['base-profile']};
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
`
export const Avatar = styled.img`
  width: 9.5rem;
  height: 9.5rem;
  border-radius: 8px;
`
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${(props) => props.theme['base-profile']};
`
export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 9.5rem;
  justify-content: space-between;

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
    color: ${(props) => props.theme['base-text']};
  }
`
export const BioHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
export const Link = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme['blue-active']};

  > span {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 0.25rem;
    > svg {
      color: ${(props) => props.theme['blue-active']};
    }
  }

  &:hover {
    /* text-decoration: underline; */
    border-bottom: 1px solid ${(props) => props.theme['blue-active']};
  }
`
