import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
const BtnContainer = styled.div`
  width: 100%;
`;
const BtnGroup = styled.div`
  width: 83.33%;
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px auto 20px;
  &:nth-child(1) {
    margin-top: 125px;
  }
`;
const Btn = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 10px;
  font-size: 2rem;
  text-align: center;
  line-height: 140px;
  background: #87cefa;
  color: #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    background: #7bafd4;
  }
  &:active {
    box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.2);
  }
`;
const FourBtn = () => {
  const { year, month, day } = useParams();
  const navigate = useNavigate();
  const base = `/${year}/${month}/${day}`;
  return (
    <BtnContainer>
      <BtnGroup>
        <Btn onClick={() => navigate(`${base}/todo`)}>할 일</Btn>
        <Btn onClick={() => navigate(`${base}/workout`)}>운동</Btn>
      </BtnGroup>
      <BtnGroup>
        <Btn onClick={() => navigate(`${base}/schedule`)}>일정</Btn>
        <Btn onClick={() => navigate(`${base}/journal`)}>일기</Btn>
      </BtnGroup>
    </BtnContainer>
  );
};
export default FourBtn;
