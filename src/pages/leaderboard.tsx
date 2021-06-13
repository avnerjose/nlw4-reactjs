import Head from "next/head";
import users from "../../users.json";
import LeaderBoardItem from "../components/LeaderBoardItem";
import {
  Container,
  Content,
  LeaderBoardTable,
} from "../styles/pages/leaderboard";

export default function LeaderBoard() {
  return (
    <Container>
      <Content>
        <Head>
          <title>Leaderboard | Move.it</title>
        </Head>
        <header>
          <h1>Leaderboard</h1>
        </header>
        <main>
          <LeaderBoardTable cellSpacing={0}>
            <thead>
              <tr>
                <th></th>
                <th>USUÁRIO</th>
                <th>DESAFIOS</th>
                <th>EXPERIÊNCIA</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <LeaderBoardItem
                  key={index}
                  id={user.id}
                  name={user.name}
                  picture={user.picture}
                  level={user.level}
                  completed={user.completed}
                  xp={user.xp}
                />
              ))}
            </tbody>
          </LeaderBoardTable>
        </main>
      </Content>
    </Container>
  );
}

LeaderBoard.requireAuth = true;
