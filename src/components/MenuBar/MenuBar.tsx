import { HistoryIcon } from "../svgs/HistoryIcon";
import { HomeIcon } from "../svgs/HomeIcon";
import { LogoutIcon } from "../svgs/LogoutIcon";
import {
  MenuWrapper,
  ListMenu
} from "./MenuBar.styled";

const MenuBar = () => {
  return (
    <MenuWrapper>
      <ListMenu>
        <li>
          <a href="/home"><HomeIcon /></a>
        </li>
        <li>
          <a href="#"><HistoryIcon /></a>
        </li>
        <li>
          <a href="/login"><LogoutIcon /></a>
        </li>
      </ListMenu>
    </MenuWrapper>
  )
}

export default MenuBar;
