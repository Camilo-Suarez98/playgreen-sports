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
} from "./History.styled";
import { useNavigate } from "react-router-dom";
import { fetchSports } from "../../utils/fetchSports";
import Loader from "../../components/Loader/Loader";

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
        <ul>
          {feedbacks.map((feedback) => (
            <CardSport key={feedback.id}>
              <p>{feedback.sportName}</p>
              <SportImage src={feedback.sportThumb} alt={feedback.sportName} />
              <p>{feedback.feedback}</p>
            </CardSport>
          ))}
        </ul>
      )}
      <MenuBar />
    </HistoryWrapper>
  );
};

export default History;
