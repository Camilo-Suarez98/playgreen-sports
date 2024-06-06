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

const MenuBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      throw new Error(`The following error has ocurred: ${error}`);
    }
  };

  return (
    <MenuWrapper>
      <ListMenu>
        <li>
          <LinkButton
            onClick={() => navigate('/home')}
            active={isActive('/home')}
          >
            <HomeIcon />
          </LinkButton>
        </li>
        <li>
          <LinkButton
            onClick={() => navigate('/history')}
            active={isActive('/history')}
          >
            <HistoryIcon />
          </LinkButton>
        </li>
        <li>
          <LinkButton
            onClick={handleLogout}
            active={isActive('/login')}
          >
            <LogoutIcon />
          </LinkButton>
        </li>
      </ListMenu>
    </MenuWrapper>
  )
}

export default MenuBar;
