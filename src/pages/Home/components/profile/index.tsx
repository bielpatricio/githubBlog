import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  Avatar,
  BioContainer,
  Info,
  Infos,
  ProfileContainer,
  Link,
  BioHeader,
  Body,
} from './styles'
import { useAPI } from '../../../../context/APIContext'

export function Profile() {
  const { user } = useAPI()
  // console.log(user)
  const userUrl = `https://github.com/${user.login}`
  return (
    <ProfileContainer>
      <Avatar src={user.avatar_url} alt="Avatar" />
      <BioContainer>
        <Body>
          <BioHeader>
            <h1>{user.name}</h1>
            <Link href={userUrl} target="_blank">
              <span>
                github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </Link>
          </BioHeader>
          <span>{user.bio}</span>
        </Body>
        <Infos>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            <h3>{user.login}</h3>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faBuilding} />
            <h3>{user.company}</h3>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faUserGroup} />
            <h3>{user.followers} seguidores</h3>
          </Info>
        </Infos>
      </BioContainer>
    </ProfileContainer>
  )
}
