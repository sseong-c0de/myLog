import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  width: 83.33%;
  margin: 0 auto;
`;
const Title = styled.h1`
  color: #4682b4;
  font-size: 2.8rem;
  padding: 0px 20px 0px 20px;
`;
const TitleDay = styled.div`
  color: #4682b4;
  font-size: 1.6rem;
  margin-top: 5px;
`;
const Arrow = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #4682b4;
  font-size: 2rem;
  font-weight: bold;
  padding: 0;
`;
const DateHeader = ({ title, onNext, onPrev, titleDay }) => {
  return (
    <HeaderContainer>
      <Arrow onClick={onPrev}>{"<"}</Arrow>
      <Title>{title}</Title>
      <TitleDay>{titleDay}</TitleDay>
      <Arrow onClick={onNext}>{">"}</Arrow>
    </HeaderContainer>
  );
};

export default DateHeader;
