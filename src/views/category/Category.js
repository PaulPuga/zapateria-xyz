import React, { useEffect, useState } from "react";
import MainTemplate from "../../components/MainTemplate";
import styled from "styled-components";
import CategoryCard from "../../components/CategoryCard";
import api from "../../services";
import { withRouter } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CreateCategoryModal from "../../components/CreateCategoryModal";

const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
  position: relative;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Category = ({ history }) => {
  let { path } = useRouteMatch();
  const [categories, setCategories] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  useEffect(() => {
    const categoriesRecord = api.category.getAllCategories();
    setCategories(categoriesRecord);
  }, []);

  const goDetails = (id) => {
    // history.push(`${path}${id}`);
  };

  return (
    <MainTemplate sectionName="Categorias">
      <CardsContainer>
        {categories.map((el) => {
          return (
            <CategoryCard
              key={el.id}
              handleClick={goDetails}
              id={el.id}
              title={el.name}
              subtitle={""}
            />
          );
        })}
        <ButtonWrapper>
          <Fab color="primary" onClick={(e) => setOpenCreateModal(true)}>
            <AddIcon />
          </Fab>
        </ButtonWrapper>
      </CardsContainer>
      <CreateCategoryModal
        open={openCreateModal}
        handleClose={(e) => setOpenCreateModal(false)}
      />
    </MainTemplate>
  );
};

export default withRouter(Category);
