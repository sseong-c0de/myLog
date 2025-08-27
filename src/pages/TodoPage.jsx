import { useParams } from "react-router-dom";
import DateHeader from "../components/DateHeader";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import styled from "styled-components";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
const TodoContainer = styled.div`
  width: 100%;
  padding-top: 30px;
`;
const TodoGroup = styled.div`
  width: 83.33%;

  margin: 0 auto;
`;
const TodoUl = styled.ul`
  width: 100%;
  font-size: 2rem;
`;
const TodoLi = styled.li`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;
const CheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 30px;
  height: 30px;
  cursor: pointer;
  accent-color: #7bafd4; /* 체크 표시 색상 (브라우저 지원) */
  margin: 0;
  border-radius: 10px;
  padding: 0;
  margin-top: 5px;
`;
const ReBox = styled.button`
  width: 30px;
  height: 30px;
  background: #bbd8ea;
  border: none;
  border-radius: 10px;
  padding: 0;
`;
const DeleteBox = styled.button`
  width: 30px;
  height: 30px;
  background: #ffadad;
  border: none;
  border-radius: 10px;
  padding: 0;
`;
const BtnGroup = styled.div`
  width: 65px;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
const AddBtn = styled.button.attrs({ type: "button" })`
  position: fixed;
  top: 50%;
  left: 48%;
  width: 30px;
  height: 30px;
  background: #bbd8ea;
  border-radius: 100%;
  border: none;
  font-size: 2.4rem;
  font-weight: bold;
  color: #7bafd4;
`;
const Todolist = styled.div`
  line-height: 40px;
`;

const TodoPage = () => {
  const { year, month, day } = useParams();
  const urlDate =
    year && month && day
      ? new Date(Number(year), Number(month) - 1, Number(day))
      : new Date();

  const title = "할 일 목록";
  const storageKey = `mylog:todos:${format(urlDate, "yyyy-M-d")}`;
  const [todo, setTodos] = useState([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      setTodos(raw ? JSON.parse(raw) : []);
    } catch (e) {
      console.warn("Todo error", e);
      setTodos([]);
    }
  }, [storageKey]);
  const handleAdd = (text) => {
    const item = { id: Date.now(), text, done: false };
    setTodos((prev) => {
      const next = [...prev, item];
      localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  };
  const toggleTodoDone = (id) => {
    setTodos((prev) => {
      const next = prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      );
      localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  };
  const [toggleModal, setToggleModal] = useState(false);
  const openModal = () => setToggleModal(true);
  const closeModal = () => setToggleModal(false);
  return (
    <div>
      <DateHeader
        title={title}
        titleDay={format(urlDate, "MM.dd (EEE)", { locale: ko })}
      ></DateHeader>

      <AddBtn onClick={openModal}>+</AddBtn>
      <TodoContainer>
        <TodoGroup>
          <TodoUl>
            {todo.map((t) => (
              <TodoLi key={t.id}>
                <CheckBox
                  checked={t.done}
                  onChange={() => toggleTodoDone(t.id)}
                ></CheckBox>
                <Todolist>{t.text}</Todolist>

                <BtnGroup>
                  <ReBox></ReBox>
                  <DeleteBox></DeleteBox>
                </BtnGroup>
              </TodoLi>
            ))}
          </TodoUl>
        </TodoGroup>
      </TodoContainer>
      {/* <ul style={{ padding: "12px 24px" }}></ul> */}
      {toggleModal && <Modal onAdd={handleAdd} onClose={closeModal}></Modal>}
    </div>
  );
};
export default TodoPage;
