import { Container } from "../styles/components/LeaderBoardItem";

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
      <td>{id}</td>
      <td className="userInfo">
        <img src={picture} className="avatar" />
        <div>
          <h4>{name}</h4>
          <p>
            <img src="icons/level.svg" alt="level" />
            Level {level}
          </p>
        </div>
      </td>
      <td>
        <p>
          <span>{completed}</span> completados
        </p>
      </td>
      <td>
        <p>
          <span>{xp}</span> xp
        </p>
      </td>
    </Container>
  );
}
