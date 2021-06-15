import React, { useContext, useEffect, useState } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import {
  ButtonProgress,
  Container,
  CountdownButton,
  CountdownButtonActive,
  Progress,
} from "../styles/components/Countdown";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");
  const [progress, setProgress] = useState(0);
  const time = minutes * 60 + seconds;

  useEffect(() => {
    const percent = ((0.5 * 60 - time) * 100) / (0.5 * 60);
    setProgress(percent);
  }, [seconds]);

  return (
    <div>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <CountdownButton disabled>
          Ciclo encerrado
          <img src="/icons/check.svg" />
          <Progress progress={100} />
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButtonActive type="button" onClick={resetCountdown}>
              Abandonar o ciclo
              <ButtonProgress>
                <Progress progress={progress} />
              </ButtonProgress>
            </CountdownButtonActive>
          ) : (
            <CountdownButton type="button" onClick={startCountdown}>
              Iniciar um ciclo
            </CountdownButton>
          )}
        </>
      )}
    </div>
  );
}
