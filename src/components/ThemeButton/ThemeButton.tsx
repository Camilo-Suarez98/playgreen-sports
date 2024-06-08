import { useTheme } from "../../context/ThemeContext";
import {
  ButtonWrapper,
  Button
} from "./ThemeButton.styled";

const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ButtonWrapper>
      <Button onClick={toggleTheme}>
        {theme === "dark" ? "🌤️" : "🌙"}
      </Button>
    </ButtonWrapper>
  )
}

export default ThemeButton;
