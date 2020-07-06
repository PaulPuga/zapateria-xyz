import React, { useEffect, useState } from "react";
import MainTemplate from "../../components/MainTemplate";
import styled from "styled-components";
import CategoryCard from "../../components/CategoryCard";
import api from "../../services";
import { withRouter } from "react-router-dom";
import { useRouteMatch, useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CreateCategoryModal from "../../components/CreateCategoryModal";

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

const CategoryDet = ({ history }) => {
  let { path } = useRouteMatch();
  let location = useLocation();
  const [categories, setCategories] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [productId, setProductId] = useState("");
  const [currentCategory, setCurrentCategory] = useState({});
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProductId(location.pathname.match(/(\w+)$/i)[0]);
  }, []);
  useEffect(() => {
    if (productId) {
      const cat = api.category.getCategory(productId);
      setCurrentCategory(cat);
    }
  }, [productId]);
  useEffect(() => {
    if (currentCategory) {
      let products = api.product.getAllProducts();
      products = products.filter((el) => el.categoria === currentCategory.id);
      setProducts(products);
    }
  }, [currentCategory]);

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
    <MainTemplate sectionName={`Categoria: ${currentCategory.name}`}>
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
      </CardsContainer>
    </MainTemplate>
  );
};

export default withRouter(CategoryDet);
