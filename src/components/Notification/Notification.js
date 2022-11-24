/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Slide from "@material-ui/core/Slide";
// import { useTranslation } from 'next-i18next';
import useStyles from "./notification-style";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function Notification() {
  // const { t } = useTranslation('common');
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Snackbar
      TransitionComponent={TransitionUp}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      classes={{
        root: classes.notification,
      }}
      open={open}
      onClose={handleClose}
    >
      <SnackbarContent
        message={<Typography id="message-id">{"We use necessary cookies to make our website and web-based interface work. With your permission we will set optional cookies to provide social media features, to show you ads relevant to your interests, and to analyse our traffic. We won't set optional cookies unless you enable them. "}</Typography>}
        classes={{
          action: classes.action,
        }}
        action={
          <Button
            color="secondary"
            variant="contained"
            className={classes.button}
            onClick={handleClose}
          >
            {"accept"}
          </Button>
        }
      />
    </Snackbar>
  );
}

export default Notification;
