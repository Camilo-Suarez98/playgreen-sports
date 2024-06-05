import { useEffect, useState } from "react";

import { fetchSports } from "../../utils/fetchSports";

interface Sport {
  idSport: string;
  strSport: string;
  strFormat: string;
  strSportThumb: string;
  strSportIconGreen: string;
  strSportDescription: string;
}

interface SportsResponse {
  sports: Sport[];
}

const Home: React.FC = () => {
  const [sportsData, setSportsData] = useState<SportsResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchSports();
      setSportsData(response.data);
    }

    fetchData();
  }, []);

  console.log(sportsData);

  return (
    <div>
      {sportsData?.sports.map(sport => {
        return (
          <div key={sport.idSport}>
            <img src={sport.strSportThumb} alt={sport.strSportDescription} />
            <p>{sport.strSport}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Home;
