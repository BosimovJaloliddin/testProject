import styled from "styled-components";

export const Container = styled.nav`
  background-color: #f8f8f8;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`;
export const Logo = styled.div`
  .logo-trip {
    font-family: "Inter";
    font-size: 26px;
    font-weight: 800;
    color: var(--primary-color);
  }
  .logo-goal {
    font-family: "Inter";
    font-size: 26px;
    font-weight: 800;
    color: var(--primary-text-color);

    &::after {
      display: inline-block;
      margin-left: 5px;
      content: "";
      width: 8px;
      height: 8px;
      background-color: #00b3a0;
      border-radius: 50%;
    }
  }
  user-select: none;
  -webkit-user-select: none;
  cursor: context-menu;

  @media (max-width: 1200px) {
    .logo-trip {
      font-size: 22px;
    }
    .logo-goal {
      font-size: 22px;

      &::after {
        margin-left: 3px;
        width: 6px;
        height: 6px;
      }
    }
  }
`;
export const MenuItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 24px;
  list-style: none;

  @media (max-width: 1200px) {
    gap: 18px;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;
export const MenuItem = styled.li`
  a {
    position: relative;
    font-family: "inter", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    text-decoration: none;
    color: var(--primary-text-color);
    cursor: pointer;
    transition: all 0.1s ease;
    user-select: none;
    -webkit-user-select: none;

    &:hover {
      color: var(--primary-color);
    }
  }
  @media (max-width: 768px) {
    a {
      font-size: 16px;
    }
  }
  @media (max-width: 480px) {
    a {
      font-size: 14px;
    }
  }
`;
export const Register = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  text-decoration: none;
  color: var(--white-color);
  padding: 16px 29px;
  background-color: var(--primary-color);
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 2px var(--primary-color);
  }
  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 10px;
    border-radius: 7px;
  }
`;

// MODAL MOBILE
// export const ModalWrapper = styled.ul`
//   position: absolute;
//   right: 0;
//   left: 0;
//   top: 60px;
//   z-index: 11;
//   animation: ${openMenu} 0.4s linear;

//   display: ${({ open }) => (open ? "flex" : "none")};
//   justify-content: space-around;
//   align-items: center;
//   padding: 20px;

//   background-color: #002248;
//   list-style: none;
// `;
// export const ModalItem = styled(MenuItem)`
//   a {
//     color: var(--white-color);
//   }
// `;
