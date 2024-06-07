import { useEffect, useState } from "react";
import { auth, db } from "../../services/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

import { Title } from "../Login/Login.styled";
import MenuBar from "../../components/MenuBar/MenuBar";
import { day, nameOfMonth } from "../../utils/Date";
import { ArrowIcon } from "../../components/svgs/ArrowIcon";
import {
  HistoryWrapper,
  ArrowButton,
  DateParagraph,
  Text,
  CardSport,
  SportImage,
  SportName,
  CardsWarpper,
  IconWrapper
} from "./History.styled";
import { useNavigate } from "react-router-dom";
import { fetchSports } from "../../utils/fetchSports";
import Loader from "../../components/Loader/Loader";
import { HeartIcon } from "../../components/svgs/HeartIcon";
import { DislikeIcon } from "../../components/svgs/DislikeIcon";

interface HistoyOfUser {
  id: string;
  sportId: string;
  feedback: string;
  sportName?: string;
  sportThumb?: string;
}

const History: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<HistoyOfUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const user = auth.currentUser;

      if (user) {
        try {
          const q = query(
            collection(db, 'feedback'),
            where('userId', '==', user.uid)
          );

          const querySnapshot = await getDocs(q);
          const feedbackList: HistoyOfUser[] = [];

          querySnapshot.forEach((doc) => {
            feedbackList.push({
              id: doc.id,
              sportId: doc.data().sportId,
              feedback: doc.data().feedback,
            });
          });

          const sportsResponse = await fetchSports();

          const updateFeedback = await Promise.all(
            feedbackList.map(async (feedback) => {
              const sport = sportsResponse.data.sports.find((s: any) => s.idSport === feedback.sportId);
              return {
                ...feedback,
                sportName: sport?.strSport,
                sportThumb: sport?.strSportThumb,
              };
            })
          );

          setFeedbacks(updateFeedback);
          setIsLoading(false);
        } catch (error) {
          throw new Error(`Has ocurred the following error: ${error}`);
          setIsLoading(false);
        }
      }
    }

    fetchFeedbacks();
  }, []);

  return (
    <HistoryWrapper>
      <ArrowButton onClick={() => navigate("/home")}>
        <ArrowIcon />
      </ArrowButton>
      <Title>History</Title>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <DateParagraph>{`${day} ${nameOfMonth}`}</DateParagraph>
      {isLoading ? (
        <Loader />
      ) : (
        <CardsWarpper>
          {feedbacks.map(({ id, sportThumb, sportName, feedback }) => (
            <CardSport key={id}>
              <SportImage
                style={{
                  backgroundImage: `url(${sportThumb || ""})`,
                }}
              >
                <SportName>{sportName}</SportName>
              </SportImage>
              <IconWrapper>
                {feedback === 'like' ?
                  <HeartIcon width="24px" /> :
                  <DislikeIcon width="20px" />
                }
              </IconWrapper>
            </CardSport>
          ))}
        </CardsWarpper>
      )}
      <MenuBar />
    </HistoryWrapper>
  );
};

export default History;
