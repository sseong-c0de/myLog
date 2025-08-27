import { format } from "date-fns";
import DateHeader from "../components/DateHeader";
import MonthGrid from "../components/MonthGrid";

const Year = ({ date, onNext, onPrev, onPickMonth }) => {
  return (
    <div>
      <DateHeader
        title={format(date, "yyyy")}
        onNext={onNext}
        onPrev={onPrev}
      ></DateHeader>
      <MonthGrid date={date} onPickMonth={onPickMonth}></MonthGrid>
    </div>
  );
};
export default Year;
