import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { MoreVert } from "@material-ui/icons";
import EditCategoryModal from "./EditCategoryModal";
import api from "../services";

const BoxContainer = styled.div`
  height: 12rem;
  width: 10rem;
  margin: 2rem;
  background-color: #ffffff;
  box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
`;
const Circle = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 1px solid #00000050;
  margin-top: 1rem;
`;
const DataContainer = styled.div`
  text-align: center;
  flex-grow: 1;
  padding-top: 1rem;
  max-width: 100%;
`;
const Header = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;
const Subtitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 400;
`;
const MoreWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.1rem;
`;

const CategoryCard = ({
  title = "title",
  subtitle = "subtitle",
  handleClick,
  id,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openEdit, setOpenEdit] = React.useState(false);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = (option) => {
    if (option === "detalles") {
      handleClick(id);
    }
    if (option === "editar") {
      setOpenEdit(true);
    }
    if (option === "eliminar") {
      api.category.deleteCategory(id);
    }
    setAnchorEl(null);
  };

  return (
    <BoxContainer>
      <MoreWrapper>
        <IconButton
          color="secondary"
          size="small"
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <MoreVert />
        </IconButton>
      </MoreWrapper>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={(e) => handleClose("detalles")}>Detalles</MenuItem>
        <MenuItem onClick={(e) => handleClose("editar")}>Editar</MenuItem>
        <MenuItem onClick={(e) => handleClose("eliminar")}>Eliminar</MenuItem>
      </Menu>
      <Circle onClick={(e) => handleClick(id)} />
      <DataContainer>
        <Header>{title}</Header>
        <Subtitle>{subtitle}</Subtitle>
      </DataContainer>
      <EditCategoryModal
        open={openEdit}
        handleClose={(e) => setOpenEdit(false)}
        id={id}
      />
    </BoxContainer>
  );
};

export default CategoryCard;
