import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { SetEmail, SetSubmitted } from "../App";

type Data = "username" | "email" | "password";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "2rem",
  },
  form: {
    textAlign: "center",
  },
  submit: {
    marginTop: "2rem",
  },
});

interface Props extends RouteComponentProps {
  email: string;
  setEmail: SetEmail;
  submitted: boolean;
  setSubmitted: SetSubmitted;
}

export const Registration = ({
  email,
  setEmail,
  submitted,
  setSubmitted,
}: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameRef: React.RefObject<TextValidator> = React.createRef();
  const emailRef: React.RefObject<TextValidator> = React.createRef();
  const passwordRef: React.RefObject<TextValidator> = React.createRef();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as Data;
    if (name === "username") setUsername(e.target.value);
    if (name === "email") setEmail(e.target.value);
    if (name === "password") setPassword(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const name = e.target.name as Data;
    if (name === "username") usernameRef.current?.validate(e.target.value);
    if (name === "email") emailRef.current?.validate(e.target.value);
    if (name === "password") passwordRef.current?.validate(e.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    alert(`${username} has signed up!`);
  };

  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root} justify="center">
      <Grid item xs={12}>
        <ValidatorForm
          onSubmit={handleSubmit}
          instantValidate={false}
          className={classes.form}
        >
          <h2>Signup</h2>
          <TextValidator
            ref={usernameRef}
            label="username"
            onBlur={handleBlur}
            onChange={handleChange}
            name="username"
            value={username}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <br />
          <TextValidator
            ref={emailRef}
            label="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            name="email"
            value={email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
          <br />
          <TextValidator
            ref={passwordRef}
            label="Password"
            onBlur={handleBlur}
            onChange={handleChange}
            name="password"
            value={password}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={submitted}
            className={classes.submit}
          >
            {(submitted && "Your form is submitted!") ||
              (!submitted && "Submit")}
          </Button>
        </ValidatorForm>
      </Grid>
    </Grid>
  );
};
