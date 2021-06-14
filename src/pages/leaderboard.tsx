import { useEffect, useState } from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import LeaderBoardItem from "../components/LeaderBoardItem";
import api from "../services/api";
import animation from "../../public/loadingAnimation.json";
import Lottie from "react-lottie-player";
import {
  Container,
  Content,
  LeaderBoardTable,
} from "../styles/pages/leaderboard";
import { useMediaQuery } from "react-responsive";

interface User {
  id: number;
  name: string;
  picture: string;
  level: number;
  completed: number;
  xp: number;
}

interface LeaderBoardProps {
  users: Array<User>;
  pagesCount: number;
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function LeaderBoard({ users, pagesCount }: LeaderBoardProps) {
  const [usersData, setUsersData] = useState<Array<User>>(users);
  const [page, setPage] = useState(2);
  const [totalPages, setTotalPages] = useState(pagesCount);
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });

  useEffect(() => {
    if (page != 1) fetchUsers();
  }, [page]);

  window.onscroll = () => {
    handleScroll();
  };

  const handleScroll = () => {
    if (page === totalPages || loading) return;
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setPage(page + 1);
  };

  const fetchUsers = async () => {
    setLoading(true);
    const { data } = await api.get("users", {
      params: {
        _limit: 5,
        _sort: "id",
        _order: "asc",
        _page: page,
      },
    });
    setUsersData((currentData) => [...currentData, ...data]);
    setLoading(false);
  };

  return (
    <Container onScroll={!isMobile && handleScroll}>
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
              {usersData.map((user, index) => (
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
          {loading && (
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Lottie
                loop
                animationData={animation}
                play
                style={{ width: 150, height: 150 }}
              />
            </div>
          )}
        </main>
      </Content>
    </Container>
  );
}

LeaderBoard.requireAuth = true;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data, headers } = await api.get("users", {
    params: {
      _limit: 5,
      _sort: "id",
      _order: "asc",
      _page: 1,
    },
  });

  const { "x-total-count": count } = headers;
  const pagesCount = Math.ceil(Number(count / 5));
  return {
    props: {
      users: data,
      pagesCount,
    },
  };
};
