import React from "react";
import styled from "styled-components";
import logo from "../assets/xyz-logo.png";
import { withRouter } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: red;
  display: flex;
`;
const NavContainer = styled.div`
  height: 100%;
  /* width: 20rem; */
  background-color: #2196f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;
const NavTopContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LogoNav = styled.img`
  max-width: 4rem;
  margin-bottom: 1rem;
`;
const UList = styled.ul`
  list-style: none;
  font-size: 1.8rem;
  font-weight: 400;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;
const Li = styled.li`
  text-align: center;
  margin: 1rem 0;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  height: 100%;
  flex-grow: 1;
  background-color: #ffffff;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
`;
const ChildrenContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 1rem;
`;
const SectionTitle = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: #000000;
`;

const Nav = ({ history }) => {
  const onItemClick = (path) => {
    history.push(path);
  };
  const onSignOut = () => {
    localStorage.removeItem("token-valid");
    history.push("/");
  };
  return (
    <NavContainer>
      <NavTopContainer>
        <LogoNav src={logo} />
        <UList>
          <Li onClick={(e) => onItemClick("/category")}>Categorias</Li>
          <Li onClick={(e) => onItemClick("/catalogue")}>Catalogo</Li>
          <Li onClick={(e) => onItemClick("/products")}>Productos</Li>
        </UList>
      </NavTopContainer>
      <UList>
        <Li onClick={onSignOut}>Cerrar Sesión</Li>
      </UList>
    </NavContainer>
  );
};
const Content = ({ sectionName, children }) => {
  return (
    <ContentContainer>
      <SectionTitle>{sectionName}</SectionTitle>
      <ChildrenContainer>{children}</ChildrenContainer>
    </ContentContainer>
  );
};

const MainTemplate = ({ sectionName = "undefined", children, history }) => {
  return (
    <Container>
      <Nav history={history} />
      <Content sectionName={sectionName}>{children}</Content>
    </Container>
  );
};

export default withRouter(MainTemplate);
