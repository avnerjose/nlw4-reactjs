import { Container } from "../styles/components/LeaderBoardItemStyles";

interface LeaderBoardItemProps {
  id: number;
  name: string;
  picture: string;
  level: number;
  completed: number;
  xp: number;
}
export default function LeaderBoardItem({
  id,
  name,
  picture,
  level,
  completed,
  xp,
}: LeaderBoardItemProps) {
  return (
    <Container>
      <div className="position">{id}</div>
      <div className="userInfo">
        <img src={picture} className="Avatar" />
        <div>
          <h4>{name}</h4>
          <p>
            <img src="icons/level.svg" alt="" />
            Level {level}
          </p>
        </div>
      </div>
      <div>
        <p>
          <span className="blueText">{completed}</span> completados
        </p>
        <p>
          <span className="blueText">{xp}</span> xp
        </p>
      </div>
    </Container>
  );
}
