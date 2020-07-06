import React from "react";
import MainTemplate from "../../components/MainTemplate";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import api from "../../services";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useHistory, useLocation } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const CardsContainer = styled.div`
  width: 100%;
  position: relative;
  flex-grow: 1;
  padding: 1rem 0;
`;
const Card = styled.div`
  width: 100%;
  height: 80%;
  box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.35);
  padding: 0.5rem 3rem;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
const ProductName = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;
const ProductAmount = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: auto;
  margin-bottom: 1rem;
`;
const ProductId = styled.h1`
  font-size: 0.8rem;
  font-weight: 300;
  margin-bottom: 3rem;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 2.8rem);
`;

const DataText = styled.h5`
  font-size: 0.8rem;
  font-weight: 500;
  /* margin-bottom: 3rem; */
`;

const Products = ({ history }) => {
  let location = useLocation();

  const [products, setProducts] = React.useState([]);
  const [selectedProduct, setSelectedProduct] = React.useState({});
  const [currentProduct, setCurrentProduct] = React.useState({});
  const [categoryName, setCategoryName] = React.useState("");
  React.useEffect(() => {
    setProducts(api.product.getAllProducts());
  }, []);

  React.useEffect(() => {
    if (location.state && products.length > 0) {
      setSelectedProduct(products.find((el) => el.id_ === location.state[0]));
    }
  }, [products]);
  React.useEffect(() => {
    if (!!selectedProduct.id) {
      setCurrentProduct({
        ...selectedProduct,
        catName: api.category.getCategory(selectedProduct.categoria).name,
      });
    }
  }, [selectedProduct]);

  const menuSelectHandle = (op, data = {}) => {
    if (op === "detalles") {
      alert("df");
    }
    if (op === "eliminar") {
      api.product.deleteProduct(data.id);
      history.push("/category");
    }
  };

  return (
    <MainTemplate sectionName="Producto">
      <Container>
        {/* <TextField
          id="outlined-basic"
          label="Producto"
          placeholder={"Buscar..."}
          variant="outlined"
          fullWidth
          onChange={(e) => {
            console.log(api.product.searchProducts(e.target.value));
          }}
        /> */}
        <Autocomplete
          id="combo-box-demo"
          options={products}
          value={selectedProduct}
          onChange={(e, newEl) => {
            setSelectedProduct(newEl);
          }}
          getOptionLabel={(option) => option.nombre}
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Productos"
              placeholder="Buscar.."
              variant="outlined"
            />
          )}
        />
        <CardsContainer>
          <Card>
            <div>
              <ProductName>
                Nombre de producto:{currentProduct.nombre}
              </ProductName>
              <ProductId>ID: {currentProduct.id}</ProductId>
            </div>
            <GridContainer>
              <DataText>Categoria: {currentProduct.catName}</DataText>
              <DataText>Marca: {currentProduct.marca}</DataText>
              <DataText>Modelo: {currentProduct.modelo}</DataText>
              <DataText>Materiales: {currentProduct.materiales}</DataText>
              <DataText>Color: {currentProduct.color}</DataText>
              <DataText>Medida: {currentProduct.sizes}</DataText>
              <DataText>Provedor: {currentProduct.provedorNombre}</DataText>
              <DataText>Telefono: {currentProduct.provedorTelefono}</DataText>
              <DataText>Email: {currentProduct.provedorCorreo}</DataText>
            </GridContainer>
            <ProductAmount>
              Cantidad stock: {currentProduct.cantidad}
            </ProductAmount>
          </Card>
          <ButtonWrapper>
            <Fab
              color="primary"
              onClick={(e) => history.push("/products/create")}
            >
              <AddIcon />
            </Fab>
          </ButtonWrapper>
        </CardsContainer>
      </Container>
    </MainTemplate>
  );
};

export default withRouter(Products);
