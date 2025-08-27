import { Route, Routes, useNavigate } from "react-router-dom";
import Year from "./pages/Year";
import Month from "./pages/Month";
import { useState } from "react";
import { addMonths, addYears, setMonth, format } from "date-fns";
import DaysPage from "./pages/DaysPage";
import TodoPage from "./pages/TodoPage";
function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const nextYear = () => setCurrentDate((prevData) => addYears(prevData, 1));
  const prevYear = () => setCurrentDate((prevData) => addYears(prevData, -1));
  const navigate = useNavigate();
  const pickMonth = (index) => {
    const year = Number(format(currentDate, "yyyy"));
    navigate(`/${year}/${index + 1}`);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Year
              date={currentDate}
              onNext={nextYear}
              onPrev={prevYear}
              onPickMonth={pickMonth}
            />
          }
        ></Route>
        <Route path="/:year/:month" element={<Month />}></Route>
        <Route path="/:year/:month/:day" element={<DaysPage />}></Route>
        <Route path="/:year/:month/:day/todo" element={<TodoPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
