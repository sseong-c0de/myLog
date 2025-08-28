import { useState } from "react";
import styled from "styled-components";
const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 320px;
  background: #c8daec;
`;
const BtnGroup = styled.div`
  width: 83.33%;
  margin: 100px auto 0;
  display: flex;
  justify-content: space-between;
`;
const ModalBar = styled.div`
  width: 160px;
  height: 10px;
  background: #a8b8cc;
  border-radius: 10px;
  margin: 5px auto 0;
`;
const InputBox = styled.input.attrs({
  id: "todo-input",
  name: "todo",
  type: "text",
  "aria-label": "할 일 입력",
})`
  width: 70%;
  height: 50px;
  border: none;
  padding-left: 10px;
  border-radius: 10px;
  background: #4682b4;
  color: #fff;
  font-size: 2rem;
  &::placeholder {
    color: #fff;
    opacity: 1;
    text-align: center;
  }
`;
const InputLabel = styled.label`
  position: absolute !important;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`;
const AddBox = styled.button.attrs({ type: "button" })`
  width: 60px;
  height: 50px;
  border-radius: 10px;
  border: none;
  color: #fff;
  background: #87cefa;
  font-size: 2rem;
`;
const CloseBtn = styled.button`
  width: 50px;
  height: 50px;
  background: #d9d9d9;
`;
const Modal = ({ onAdd, onClose }) => {
  const [isComposing, setComposing] = useState(false);
  const [text, setText] = useState("");
  const handleAdd = () => {
    const value = text.trim();
    if (!value) return;
    onAdd?.(value);
    setText("");
  };
  const KeyDownAdd = (e) => {
    if (e.key === "Enter" && !isComposing) handleAdd();
  };

  return (
    <ModalContainer>
      <ModalBar />
      <CloseBtn onClick={onClose}>X</CloseBtn>
      <BtnGroup>
        <InputLabel htmlFor="todo-input">할 일</InputLabel>
        <InputBox
          placeholder="할 일을 입력하세요"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onCompositionStart={() => setComposing(true)}
          onCompositionEnd={() => setComposing(false)}
          onKeyDown={KeyDownAdd}
        ></InputBox>
        <AddBox onClick={handleAdd}>추가</AddBox>
      </BtnGroup>
    </ModalContainer>
  );
};
export default Modal;
