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
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
export const Form = styled.form`
  max-width: 55.5rem;
  margin: 3.6rem auto;

  > header {
    margin: 0 auto 3.6rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 3.6rem;
      font-weight: 500;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

`