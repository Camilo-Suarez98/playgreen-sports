import { useLocation, useNavigate } from "react-router-dom";
import { HistoryIcon } from "../svgs/HistoryIcon";
import { HomeIcon } from "../svgs/HomeIcon";
import { LogoutIcon } from "../svgs/LogoutIcon";
import {
  MenuWrapper,
  ListMenu,
  LinkButton
} from "./MenuBar.styled";
import { auth } from "../../services/firebaseConfig";
import { useTheme } from "../context/ThemeContext";

const MenuBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  const isActive = (path: string) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      throw new Error(`Error logging out: ${error}`);
    }
  };

  return (
    <MenuWrapper>
      <ListMenu>
        <li>
          <LinkButton
            onClick={() => navigate("/home")}
            active={isActive("/home")}
          >
            <HomeIcon
              color={
                isActive("/home")
                  ? theme === "dark"
                    ? "#FFFFFF"
                    : "#1A5BE1"
                  : "#777777"
              }
            />
          </LinkButton>
        </li>
        <li>
          <LinkButton
            onClick={() => navigate("/history")}
            active={isActive("/history")}
          >
            <HistoryIcon
              color={
                isActive("/history")
                  ? theme === "dark"
                    ? "#FFFFFF"
                    : "#1A5BE1"
                  : "#777777"
              }
            />
          </LinkButton>
        </li>
        <li>
          <LinkButton
            onClick={handleLogout}
            active={isActive('/login')}
          >
            <LogoutIcon
              color={
                isActive("/history")
                  ? theme === "dark"
                    ? "#FFFFFF"
                    : "#1A5BE1"
                  : "#777777"
              }
            />
          </LinkButton>
        </li>
      </ListMenu>
    </MenuWrapper>
  )
}

export default MenuBar;
