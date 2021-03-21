import Base from "../base";
import Head from "next/head";
import users from "../../../users.json";
import LeaderBoardItem from "../../components/LeaderBoardItem";

export default function LeaderBoard() {
  function LeaderBoardList() {
    return (
      <>
        {users.map((user,index) => {
          return (
            <LeaderBoardItem
              key={index}
              id={user.id}
              name={user.name}
              picture={user.picture}
              level={user.level}
              completed={user.completed}
              xp={user.xp}
            />
          );
        })}
      </>
    );
  }

  return (
    <Base>
      <Head>
        <title>Leaderboard | Move.it</title>
      </Head>
      <header>
        <h1>Leaderboard</h1>
      </header>
      <main>
        <LeaderBoardList />
      </main>
    </Base>
  );
}
