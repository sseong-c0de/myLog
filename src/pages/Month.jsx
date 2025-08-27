import DateHeader from "../components/DateHeader";
import Weeks from "../components/Weeks";
import Days from "../components/Days";
import { addMonths, format } from "date-fns";
import { useNavigate, useParams } from "react-router-dom";

const Month = ({ date }) => {
  const { year, month } = useParams();
  const navigate = useNavigate();
  const urlDate =
    year && month ? new Date(Number(year), Number(month) - 1, 1) : null;
  const viewDate = urlDate ?? date ?? new Date();
  const goPrev = () => {
    const d = addMonths(viewDate, -1);
    navigate(`/${format(d, "yyyy")}/${Number(format(d, "M"))}`);
  };
  const goNext = () => {
    const d = addMonths(viewDate, 1);
    navigate(`/${format(d, "yyyy")}/${Number(format(d, "M"))}`);
  };
  return (
    <div>
      <DateHeader
        title={format(viewDate, "yyyy.MM")}
        onNext={goNext}
        onPrev={goPrev}
      ></DateHeader>
      <Weeks></Weeks>
      <Days date={viewDate}></Days>
    </div>
  );
};
export default Month;
