import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { MoreVert } from "@material-ui/icons";

const BoxContainer = styled.div`
  height: 4rem;
  width: 100%;
  box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.35);
  display: flex;
  /* justify-content: space-around; */
  padding-left: 1rem;
  align-items: center;
  cursor: pointer;
  position: relative;
`;
const Circle = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 1px solid #00000050;
`;
const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;
const Title = styled.h1`
  font-size: 1rem;
  font-weight: 600;
`;
const Subitle = styled.h3`
  font-size: 0.8rem;
  font-weight: 400;
`;
const MoreWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.1rem;
`;

const ProductCard = ({ id, title, subtitle, subtitle2, menuSelectHandle }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = (option, data = {}) => {
    menuSelectHandle(option, data);
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
        <MenuItem onClick={(e) => handleClose("detalles", { id: id })}>
          Detalles
        </MenuItem>
        <MenuItem onClick={(e) => handleClose("eliminar", { id: id })}>
          Eliminar
        </MenuItem>
      </Menu>
      <Circle />
      <DataWrapper>
        <Title>{title}</Title>
        <Subitle>{subtitle}</Subitle>
        <Subitle>{subtitle2}</Subitle>
      </DataWrapper>
    </BoxContainer>
  );
};

export default ProductCard;
