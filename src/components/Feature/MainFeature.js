/* eslint-disable quotes */
import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
//  import { useTranslation } from "next-i18next";
import { useText } from "../../theme/common";
import Title from "../Title";
import useStyles from "./feature-style";

const featureList = [
  {
    img: "/images/hosting/feature1.png",
    title: "Unmetered bandwidth",
    desc: "Bring in all the traffic you want, we got ya.",
  },
  {
    img: "/images/hosting/feature2.png",
    title: "Domain registration",
    desc: "Claim your name and get yourself online.",
  },
  {
    img: "/images/hosting/feature3.png",
    title: "One-click installs",
    desc: "Integrating your apps couldn't be any easier.",
  },
];

function MainFeature() {
  const classes = useStyles();
  const text = useText();
  //  const { t } = useTranslation("common");

  return (
    <div className={classes.mainFeature}>
      <Container fixed>
        <Title
          caption=""
          text=""
          align=""
        />
        <Grid container spacing={6} className={classes.grid}>
          {featureList.map((item, index) => (
            <Grid item md={4} key={index.toString()}>
              <div className={classes.item}>
                <figure>
                  <img src={item.img} alt={item.title} />
                </figure>
                <Typography variant="h6" className={text.subtitle2}>
                  {"" + item.title}
                </Typography>
                <Typography component="p" className={text.paragraph}>
                  {"" + item.desc}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default MainFeature;
