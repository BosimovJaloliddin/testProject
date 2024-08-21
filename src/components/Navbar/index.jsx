// import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Container,
  Logo,
  MenuItem,
  MenuItems,
  // ModalItem,
  // ModalWrapper,
  Register,
  Wrapper,
} from "./style";

const Navbar = () => {
  // const router = useRouter();
  // const pathname = usePathname();
  // const [openModal, setOpenModal] = useState(false);

  // useEffect(() => {
  //   setOpenModal(false);
  // }, [pathname]);

  // const getRoute = (pageName) => {
  //   return Boolean(pathname === pageName);
  // };
  return (
    <div>
      <Container>
        <Wrapper className="container">
          <Logo>
            <span className="logo-trip">Eko</span>
            <span className="logo-goal">Uzb</span>
          </Logo>
          <MenuItems>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/about">About</Link>
            </MenuItem>
          </MenuItems>
          <Register>Add tree</Register>
        </Wrapper>
      </Container>
      <div style={{ overflowX: "scroll" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
