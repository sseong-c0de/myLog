import {
  addDays,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  getDay,
  isSameMonth,
  isToday,
} from "date-fns";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DaysContainer = styled.div`
  width: 100%;
`;
const DaysGroup = styled.div`
  width: 83.33%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 55px;
  justify-items: center;
  align-items: center;
  font-size: 2rem;
  padding-top: 50px;
`;
const Day = styled.div`
  color: ${({ $dow }) =>
    $dow === 0 ? "red" : $dow === 6 ? "blue" : "inherit"};
  ${({ $today }) =>
    $today &&
    `
      font-weight: bold;
    `}

  background: ${({ $today }) => ($today ? "#d9d9d9" : "transparent")};
  opacity: ${({ $other }) => ($other ? 0.5 : 1)};
  cursor: pointer;
`;
const Days = ({ date }) => {
  const navigate = useNavigate();

  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  // 이번 달의 시작과 끝 1~30
  const calenderStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const calenderEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });
  // 달력의 첫칸,마지막칸 맞추기
  let days = eachDayOfInterval({ start: calenderStart, end: calenderEnd });
  // 달력의 모든 칸 만들기
  if (days.length < 42) {
    const need = 42 - days.length;
    const newEnd = addDays(calenderEnd, need);
    days = eachDayOfInterval({ start: calenderStart, end: newEnd });
  }
  // 42칸 고정하기
  return (
    <DaysContainer>
      <DaysGroup>
        {days.map((d) => {
          const today = isToday(d);
          const dow = getDay(d);
          const other = !isSameMonth(d, date);
          return (
            <Day
              key={d.toISOString()}
              $dow={dow}
              $other={other}
              $today={today}
              onClick={() =>
                navigate(
                  `/${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`
                )
              }
            >
              {d.getDate()}
            </Day>
          );
        })}
      </DaysGroup>
    </DaysContainer>
  );
};
export default Days;
