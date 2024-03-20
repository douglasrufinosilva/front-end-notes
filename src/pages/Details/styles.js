import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 6.4rem 0;
  }
  `
  
  export const Links = styled.ul`
    list-style: none;
  
    > li {
      margin-top: 2rem;

      a {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  `

  export const Content = styled.div`
    max-width:55.5rem;
    margin: 0 auto;

    display:flex;
    flex-direction: column;

    > button:first-child {
      align-self: flex-end;
    }

    > h1 {
      font-size: 3.6rem;
      font-weight: 500;
      padding-top: 6.4rem;
    }

    > p {
      font-size: 1.6rem;
      margin-top: 1.6rem;
      text-align: justify;
    }
  `

