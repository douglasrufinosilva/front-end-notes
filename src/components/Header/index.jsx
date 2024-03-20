import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
  return(
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/douglasrufinosilva.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo!</span>
          <strong>Douglas Rufino Silva</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}