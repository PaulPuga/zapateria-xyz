import React, { useState, useEffect } from "react";
import "./style.css";
import clientLogo from "../../assets/xyz-logo.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withSnackbar } from "notistack";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Login({ enqueueSnackbar }) {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = (e) => {
    if (!username.length && !password.length) {
      enqueueSnackbar("Favor de llenar todos los campos", { variant: "error" });
    } else {
      const developerUser = JSON.parse(localStorage.getItem("currentUser"));
      if (
        developerUser.username === username &&
        developerUser.password === password
      ) {
        alert("ACCESS");
      } else {
        enqueueSnackbar("Usuario o contraseña incorrectos", {
          variant: "error",
        });
      }
    }
  };

  return (
    <div className="login__container">
      <div className="login__left-section">
        <img src={clientLogo} alt="client-logo" />
      </div>
      <div className="login__right-section">
        <form className="login__form">
          <h1 className="login__title">Iniciar Sesión</h1>
          <div className="input-wrapper">
            <TextField
              label="Usuario"
              fullWidth
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button variant="contained" color="primary" onClick={onSubmitForm}>
            ENTRAR
          </Button>
        </form>
      </div>
    </div>
  );
}

export default withSnackbar(Login);
