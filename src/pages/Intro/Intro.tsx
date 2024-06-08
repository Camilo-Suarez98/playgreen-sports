import { useNavigate } from "react-router-dom";

import { Button } from "../Login/Login.styled";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>PlayGreen Sports</h1>
      <Button onClick={() => navigate("/login")}>Login</Button>
    </>
  );
};

export default Intro;
