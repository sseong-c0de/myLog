import styled from "styled-components";
const WeekContainer = styled.div`
  width: 100%;
`;
const WeekGroup = styled.div`
  width: 83.33%;
  margin: 20px auto 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  font-size: 2rem;
`;
const Day = styled.div`
  font-size: 2rem;
  color: ${({ $index }) =>
    $index === 0 ? "red" : $index === 6 ? "blue" : "black"};
`;
const Weeks = () => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <WeekContainer>
      <WeekGroup>
        {days.map((day, index) => {
          return (
            <Day key={day} $index={index}>
              {day}
            </Day>
          );
        })}
      </WeekGroup>
    </WeekContainer>
  );
};
export default Weeks;
