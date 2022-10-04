import { HeaderContainer, List } from "../syles/styles";
import logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import close from "../assets/icon-close.svg";

export default function Header() {
  const [visible, setVisible] = useState(false);

  const isVisible = () => {
    visible ? setVisible(false) : setVisible(true);
  };

  return (
    <HeaderContainer>
      <div className={visible ? "logo" : ""}>
        <img src={logo} alt="logo" />
        <img src={close} id="close" className={visible && 'show'} alt="close icon" onClick={isVisible} />
      </div>
      <List className={visible ? "show_menu" : ""}>
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </List>
      {!visible && <GiHamburgerMenu className="menu" onClick={isVisible} />}
    </HeaderContainer>
  );
}
