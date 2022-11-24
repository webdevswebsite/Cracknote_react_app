import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
// import { useTranslation } from 'next-i18next';
import brand from "~/public/text/brand";
import { useText } from "../../theme/common";
import routeLink from "~/public/text/link";
import logo from "../../images/hosting-logo.svg";
import Checkbox from "./Checkbox";
import ParallaxCloud from "../Parallax/Cloud";
import useStyles from "./form-style";

function Contact() {
  const classes = useStyles();
  const text = useText();
  // const { t } = useTranslation('common');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    ValidatorForm.addValidationRule("isTruthy", (value) => value);
  });

  const [openNotif, setNotif] = useState(false);

  const [check, setCheck] = useState(false);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = (event) => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return (
    <div className={classes.pageWrap}>
      <div className={classes.cloudDeco}>
        <ParallaxCloud />
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      <Hidden mdUp>
        <div className={clsx(classes.logo, classes.logoHeader)}>
          <a href={routeLink.hosting.home}>
            <img src={logo} alt="logo" />
            <Typography component="span" className={text.title}>
              {brand.hosting.projectName}
            </Typography>
          </a>
        </div>
      </Hidden>
      <Container maxWidth="md" className={classes.innerWrap}>
        <IconButton
          href={routeLink.hosting.home}
          className={classes.backtohome}
        >
          <i className="ion-ios-home-outline" />
          <i className="ion-ios-arrow-round-back" />
        </IconButton>
        <Paper className={clsx(classes.formBox, "fragment-fadeUp")}>
          <div className={classes.frmDeco}>
            <svg className={classes.cloud}>
              <use xlinkHref="/images/hosting/cloud_bottom_frm.svg#main" />
            </svg>
          </div>
          <div className={classes.fullFromWrap}>
            <Typography
              variant="h3"
              align="center"
              className={clsx(classes.title, text.title)}
              gutterBottom
            >
              {t("contact_title2")}
            </Typography>
            {/* <Typography className={clsx(classes.desc, text.subtitle2)}>
              {t('contact_subtitle')}
            </Typography> */}
            <div className={classes.form}>
              <ValidatorForm
                onSubmit={handleSubmit}
                onError={(errors) => console.log(errors)}
              >
                <Grid container spacing={6}>
                  <Grid item md={6} xs={12}>
                    <TextValidator
                      variant="filled"
                      className={classes.input}
                      label={t("form_name")}
                      onChange={handleChange("name")}
                      name="Name"
                      value={values.name}
                      validators={["required"]}
                      errorMessages={["This field is required"]}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextValidator
                      variant="filled"
                      className={classes.input}
                      label={"form_email"}
                      onChange={handleChange("email")}
                      name="Email"
                      value={values.email}
                      validators={["required", "isEmail"]}
                      errorMessages={[
                        "This field is required",
                        "email is not valid",
                      ]}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextValidator
                      variant="filled"
                      className={classes.input}
                      label={"form_phone"}
                      onChange={handleChange("phone")}
                      name="Phone"
                      value={values.phone}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextValidator
                      variant="filled"
                      className={classes.input}
                      label={t("form_company")}
                      onChange={handleChange("company")}
                      name="Company"
                      value={values.company}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator
                      variant="filled"
                      multiline
                      rows="6"
                      className={classes.input}
                      label={"form_message"}
                      onChange={handleChange("message")}
                      name="Message"
                      value={values.message}
                    />
                  </Grid>
                </Grid>
                <div className={clsx(classes.btnArea, classes.flex)}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        validators={["isTruthy"]}
                        errorMessages="This field is required"
                        checked={check}
                        value={check}
                        onChange={(e) => handleCheck(e)}
                        color="primary"
                      />
                    }
                    label={
                      <span>
                        {"form_terms"}
                        <br />
                        <a href="#">{"form_privacy"}</a>
                      </span>
                    }
                  />
                  <Button
                    variant="contained"
                    fullWidth={isMobile}
                    type="submit"
                    color="secondary"
                    size="large"
                  >
                    {"form_send"}
                  </Button>
                </div>
              </ValidatorForm>
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default Contact;
