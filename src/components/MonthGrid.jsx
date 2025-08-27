import styled from "styled-components";
const MonthContainer = styled.div`
  width: 100%;
`;
const MonthGroup = styled.div`
  width: 83.33%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-between;
`;
const MonthBox = styled.div`
  width: 65px;
  height: 65px;
  background: #87cefa;
  margin-bottom: 100px;
  color: #fff;
  font-size: 2.2rem;
  text-align: center;
  line-height: 65px;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  &:nth-child(-n + 4) {
    margin-top: 85px;
  }
  &:hover {
    background: #7bafd4;
  }
  &:active {
    box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.2);
  }
`;
const months = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];
const MonthGrid = ({ date, onPickMonth }) => {
  return (
    <div>
      <MonthContainer>
        <MonthGroup>
          {months.map((month, index) => {
            return (
              <MonthBox key={index} onClick={() => onPickMonth(index)}>
                {month}
              </MonthBox>
            );
          })}
        </MonthGroup>
      </MonthContainer>
    </div>
  );
};
export default MonthGrid;
