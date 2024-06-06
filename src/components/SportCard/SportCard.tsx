import { Sport } from "../../pages/Home/Home";
import {
  SportInfoWrapper,
  SportImage,
  SportName
} from "./SportCard.styled";

interface SportCard {
  sport: Sport;
}

const SportCard: React.FC<SportCard> = ({ sport }) => {
  return (
    <SportInfoWrapper>
      <SportImage src={sport.strSportThumb} alt={sport.strSportDescription} />
      <SportName>{sport.strSport}</SportName>
    </SportInfoWrapper>
  );
};

export default SportCard;
