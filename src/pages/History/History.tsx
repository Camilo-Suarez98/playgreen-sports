import { useEffect, useState } from "react";
import { auth, db } from "../../services/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import axios from "axios";

import { Paragraph, Title } from "../Login/Login.styled";
import MenuBar from "../../components/MenuBar/MenuBar";
import { day, nameOfMonth } from "../../utils/Date";

interface HistoyOfUser {
  id: string;
  sportId: string;
  feedback: string;
  sportName?: string;
  sportThumb?: string;
}

const History: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<HistoyOfUser[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const user = auth.currentUser;

      if (user) {
        try {
          const q = query(
            collection(db, 'feedback'),
            where('userId', '==', user.uid)
          )

          const querySnapshot = await getDocs(q);
          const feedbackList: HistoyOfUser[] = [];

          querySnapshot.forEach((doc) => {
            feedbackList.push({
              id: doc.id,
              sportId: doc.data().sportId,
              feedback: doc.data().feeedback,
            });
          });

          const updateFeedback = await Promise.all(
            feedbackList.map(async (feedback) => {
              const response = await axios.get('https://apimocha.com/playgreen/sports');
              const sport = response.data.sports.find((s: any) => s.idSport === feedback.sportId);
              return {
                ...feedback,
                sportName: sport?.strSport,
                sportThumb: sport?.strSportThumb,
              };
            })
          );

          setFeedbacks(updateFeedback);
        } catch (error) {
          throw new Error(`The following error has ocurred: ${error}`);
        }
      }
    }

    fetchFeedbacks();
  }, []);

  return (
    <div>
      <Title>History</Title>
      <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
      <Paragraph>{`${day} ${nameOfMonth}`}</Paragraph>
      {feedbacks.length === 0 ? (
        <Paragraph>No feedback found.</Paragraph>
      ) : (
        <ul>
          {feedbacks.map((feedback) => (
            <li key={feedback.id}>
              <p>Sport: {feedback.sportName}</p>
              <img src={feedback.sportThumb} alt={feedback.sportName} />
              <p>Feedback: {feedback.feedback}</p>
            </li>
          ))}
        </ul>
      )}
      <MenuBar />
    </div>
  );
};

export default History;
