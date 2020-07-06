import React from "react";
import MainTemplate from "../../components/MainTemplate";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ProductCard from "../../components/ProductCard";
import api from "../../services";
import { withRouter } from "react-router-dom";

const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 1rem;
  flex-wrap: wrap;
  position: relative;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Catalogue = ({ history }) => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    setProducts(api.product.getAllProducts());
  }, []);

  const menuSelectHandle = (op, data = {}) => {
    if (op === "detalles") {
      history.push("/products", [data.id]);
    }
    if (op === "eliminar") {
      api.product.deleteProduct(data.id);
      history.push("/category");
    }
    if (op === "editar") {
      history.push("/products/edit/" + data.id, [data.id]);
    }
  };

  return (
    <MainTemplate sectionName="Catalogo">
      <CardsContainer>
        {products.map((el) => {
          return (
            <ProductCard
              key={el.id_}
              id={el.id_}
              title={el.nombre}
              subtitle={`Marca: ${el.marca}`}
              subtitle2={`Modelo: ${el.modelo}`}
              menuSelectHandle={menuSelectHandle}
            />
          );
        })}
        <ButtonWrapper>
          <Fab
            color="primary"
            onClick={(e) => history.push("/products/create")}
          >
            <AddIcon />
          </Fab>
        </ButtonWrapper>
      </CardsContainer>
    </MainTemplate>
  );
};

export default withRouter(Catalogue);
