import { useEffect, useState } from "react";

import { fetchSports } from "../../utils/fetchSports";

interface Sports {
  idSport: number,
  strSportThumb: string
}

const Home = () => {
  const [sports, setSports] = useState<Sports[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchSports();
      setSports(response.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {sports.map((sport) => (
        <div key={sport.idSport}>
          <img src={sport.strSportThumb} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Home;
