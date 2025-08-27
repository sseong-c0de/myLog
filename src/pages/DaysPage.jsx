import { useNavigate, useParams } from "react-router-dom";
import FourBtn from "../components/FourBtn";
import DateHeader from "../components/DateHeader";
import { addDays, format } from "date-fns";
import { ko } from "date-fns/locale";
const DaysPage = ({ date }) => {
  const { year, month, day } = useParams();
  const navigate = useNavigate();
  const urlDate =
    year && month && day
      ? new Date(Number(year), Number(month) - 1, Number(day))
      : new Date();
  const viewDate = urlDate ?? date ?? new Date();
  const goPrev = () => {
    const d = addDays(viewDate, -1);
    navigate(
      `/${format(d, "yyyy")}/${Number(format(d, "M"))}/${Number(
        format(d, "dd")
      )}`
    );
  };
  const goNext = () => {
    const d = addDays(viewDate, 1);
    navigate(
      `/${format(d, "yyyy")}/${Number(format(d, "M"))}/${Number(
        format(d, "dd")
      )}`
    );
  };
  return (
    <div>
      <DateHeader
        title={format(urlDate, "yyyy.MM.dd (EEE)", { locale: ko })}
        onNext={goNext}
        onPrev={goPrev}
      ></DateHeader>
      <FourBtn></FourBtn>
    </div>
  );
};
export default DaysPage;
