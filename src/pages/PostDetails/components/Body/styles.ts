import styled from "styled-components";

export const BodyContainer = styled.div`
  padding: 2rem;
  > h1, h2, h3, h4, h5, h6, p, pre {
    padding: 1rem;
  }
  > pre {
    background: ${(props) => props.theme['base-border']};
  }
`