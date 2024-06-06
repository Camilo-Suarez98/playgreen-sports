import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchSports();
      setSportsData(response.data.sports);
    }

    fetchData();
  }, []);

  const handleLike = async () => {
    saveUserChoise('like');
    nextSport();
  };

  const handleDislike = async () => {
    saveUserChoise('dislike');
    nextSport();
  }

  const saveUserChoise = async (userChoise: 'like' | 'dislike') => {
    const user = auth.currentUser;

    if (user) {
      try {
        await addDoc(collection(db, 'feedback'), {
          userId: user.uid,
          sportId: sportsData[currentIndex].idSport,
          feedback: userChoise,
        });
      } catch (error) {
        console.error('Error saving feedback:', error);
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
  console.log(sportsData);

  // color={theme === 'light' ? "#D36060" : "#FFFFFF"}
  // to include insided of dislikeicon
  return (
    <HomeWrapper>
      <SportCard sport={currentSport} />
      <ButtonsWrapper>
        <DislikeButton onClick={handleDislike}>
          <DislikeIcon />
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
