/* eslint-disable quotes */
import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SendIcon from "@material-ui/icons/Send";
import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
// import { useTranslation } from "next-i18next";
import { useText } from "../../theme/common";
import useStyles from "./subscribe-style";

function SubscribeForm() {
  const theme = useTheme();
  const text = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  // const { t } = useTranslation("common");
  const [value, setValue] = useState("");
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Typography component="p" className={text.paragraph}>
          hosting-landing.footer_subscribe
        </Typography>
        <div className={classes.form}>
          <form>
            <TextField
              className={classes.field}
              fullWidth
              placeholder="hosting-landing.footer_mail"
              onChange={(e) => handleChange(e)}
              value={value}
            />
            <Button
              variant={isDesktop ? "contained" : "text"}
              color="primary"
              className={classes.button}
            >
              {isDesktop && "hosting-landing.subscribe"}
              {isMobile && <SendIcon />}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default SubscribeForm;
