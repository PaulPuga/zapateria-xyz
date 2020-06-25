import React from "react";
import MainTemplate from "../../components/MainTemplate";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import api from "../../services";
import short from "short-uuid";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";

const sizes = [
  "23.7",
  "24.1",
  "24.5",
  "25	",
  "25.4",
  "25.8",
  "26.2",
  "26.7",
  "27.1",
  "27.5",
  "27.9",
  "28.3",
  "28.8",
  "29.2",
  "29.6",
  "30	",
  "30.5",
  "31.3",
  "32.2",
  "33	",
  "33.9",
];

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  width: 100%;
  /* height: 95%; */
  margin: 1rem 0;
  box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.35);
  display: grid;
  /* grid-template-rows: 1fr 1fr 1fr auto; */
  padding: 0.5rem 4rem;
  gap: 1rem;
`;
const Section = styled.div`
  width: 100%;
  height: 100%;
`;
const Header = styled.h1`
  font-size: 1.6rem;
  font-weight: 400;
`;
const InputContainer = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 2rem;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
`;

const useStyles = makeStyles((theme) => ({
  fullRow: {
    gridColumn: "1 / span 2",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const CreateProduct = ({ history }) => {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState({});
  const [selectedSizes, setSelectedSizes] = React.useState("");

  const onSubmit = (data) => {
    const dataToSend = {
      ...data,
      categoria: selectedCategory,
      sizes: selectedCategory,
      id_: short.generate(),
    };
    api.product.createProduct(dataToSend);
    history.push("/products");
  };

  React.useEffect(() => {
    const categoriesRecord = api.category.getAllCategories();
    setCategories(categoriesRecord);
  }, []);

  return (
    <MainTemplate sectionName="Nuevo producto">
      <Container>
        <Form>
          <Section>
            <Header>Información basica</Header>
            <InputContainer>
              <TextField
                label="Nombre"
                name="nombre"
                inputRef={register({ required: true })}
                variant="outlined"
                fullWidth
                error={errors.nombre}
              />
              <TextField
                label="Id"
                name="id"
                inputRef={register({ required: true })}
                variant="outlined"
                fullWidth
                error={errors.id}
              />
              <TextField
                label="Marca"
                name="marca"
                inputRef={register({ required: true })}
                error={errors.marca}
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Modelo"
                variant="outlined"
                name="modelo"
                inputRef={register({ required: true })}
                error={errors.modelo}
                fullWidth
              />
              {/* <TextField
                className={classes.fullRow}
                name="categoria"
                inputRef={register({ required: true })}
                error={errors.categoria}
                label="Categoria"
                variant="outlined"
                fullWidth
              /> */}
              <FormControl variant="outlined" className={classes.fullRow}>
                <InputLabel id="categoria-select-label">Categoria</InputLabel>
                <Select
                  labelId="categoria-select-label"
                  id="categoria-select"
                  inputProps={{
                    name: "categoria",
                    inputRef: register({ required: true }),
                  }}
                  error={errors.categoria}
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  fullWidth
                >
                  {categories.map((el) => {
                    return (
                      <MenuItem key={el.id} value={el.id}>
                        {el.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </InputContainer>
          </Section>
          <Section>
            <Header>Información adicional</Header>
            <InputContainer>
              <TextField
                label="Materiales"
                name="materiales"
                inputRef={register()}
                error={errors.materiales}
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Color"
                name="color"
                inputRef={register()}
                variant="outlined"
                fullWidth
              />
              {/* <TextField
                label="Medida"
                name="medida"
                inputRef={register()}
                variant="outlined"
                fullWidth
              /> */}
              <FormControl variant="outlined">
                <InputLabel id="medida-select-label">Medida</InputLabel>
                <Select
                  labelId="medida-select-label"
                  id="medida-select"
                  inputProps={{
                    name: "medida",
                    inputRef: register(),
                  }}
                  error={errors.medida}
                  value={selectedSizes}
                  onChange={(e) => setSelectedSizes(e.target.value)}
                  fullWidth
                >
                  {sizes.map((el) => {
                    return (
                      <MenuItem key={el} value={el}>
                        {el}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <TextField
                label="Cantidad"
                name="cantidad"
                type="number"
                inputRef={register()}
                variant="outlined"
                fullWidth
              />
            </InputContainer>
          </Section>
          <Section>
            <Header>Información de provedor</Header>
            <InputContainer>
              <TextField
                label="Nombre"
                name="provedorNombre"
                inputRef={register()}
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Telefono"
                name="provedorTelefono"
                inputRef={register()}
                variant="outlined"
                fullWidth
              />
              <TextField
                className={classes.fullRow}
                label="Correo"
                name="provedorCorreo"
                inputRef={register()}
                variant="outlined"
                fullWidth
              />
            </InputContainer>
          </Section>
          <ButtonsWrapper>
            <Button
              className={classes.button}
              variant="contained"
              color="default"
              onClick={(e) => history.goBack()}
            >
              Regregar
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Continuar
            </Button>
          </ButtonsWrapper>
        </Form>
      </Container>
    </MainTemplate>
  );
};

export default withRouter(CreateProduct);
