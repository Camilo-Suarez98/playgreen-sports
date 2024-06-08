import { useEffect, useState } from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

import { fetchSports } from "../../utils/fetchSports";
import { HeartIcon } from "../../components/svgs/HeartIcon";
import { DislikeIcon } from "../../components/svgs/DislikeIcon";
import { auth, db } from '../../services/firebaseConfig';
import SportCard from "../../components/SportCard/SportCard";
import Loader from "../../components/Loader/Loader";
import MenuBar from "../../components/MenuBar/MenuBar";
import {
  HomeWrapper,
  ButtonsWrapper,
  DislikeButton,
  LikeButton
} from "./Home.styled";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import { useTheme } from "../../context/ThemeContext";

export interface Sport {
  idSport: string;
  strSport: string;
  strFormat: string;
  strSportThumb: string;
  strSportIconGreen: string;
  strSportDescription: string;
}

const Home: React.FC = () => {
  const [sportsData, setSportsData] = useState<Sport[] | []>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchSports();
      setSportsData(response.data.sports);

      const user = auth.currentUser;
      if (user) {
        const q = query(
          collection(db, "feedback"),
          where("userId", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);
        const evaluatedSportIds = querySnapshot.docs.map(doc => doc.data().sportId);

        const filteredSports = sportsData.filter((sport: Sport) => !evaluatedSportIds.includes(sport.idSport));
        setSportsData(filteredSports);
      } else {
        setSportsData(sportsData);
      }
    }

    fetchData();
  }, [sportsData]);

  const handleLike = async () => {
    saveUserChoise("like");
    nextSport();
  };

  const handleDislike = async () => {
    saveUserChoise("dislike");
    nextSport();
  }

  const saveUserChoise = async (userChoise: "like" | "dislike") => {
    const user = auth.currentUser;

    if (user) {
      try {
        await addDoc(collection(db, "feedback"), {
          userId: user.uid,
          sportId: sportsData[currentIndex].idSport,
          feedback: userChoise,
        });
      } catch (error) {
        throw new Error(`Error saving feedback, ${error}`);
      }
    }
  };

  const nextSport = () => {
    if (currentIndex < sportsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  if (sportsData?.length === 0) {
    return <Loader />
  }

  const currentSport = sportsData[currentIndex];

  return (
    <HomeWrapper>
      <ThemeButton />
      <SportCard sport={currentSport} />
      <ButtonsWrapper>
        <DislikeButton onClick={handleDislike}>
          <DislikeIcon
            color={theme === "light" ? "#D36060" : "#FFFFFF"}
          />
        </DislikeButton>
        <LikeButton onClick={handleLike}>
          <HeartIcon />
        </LikeButton>
      </ButtonsWrapper>
      <MenuBar />
    </HomeWrapper>
  );
};

export default Home;