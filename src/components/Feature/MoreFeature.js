import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import ScrollAnimation from "react-scroll-animation-wrapper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
// import { useTranslation } from 'next-i18next';
import { useTextAlign, useText } from "../../theme/common";
import Title from "../Title";
import useStyles from "./feature-style";

function MoreFeature() {
  // Theme breakpoints
  const theme = useTheme();
  const text = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Translation Function
  // const { t } = useTranslation('common');

  const classes = useStyles();
  const align = useTextAlign();
  return (
    <div className={classes.moreFeature}>
      <div className={classes.chartDeco} />
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Grid
            direction={isMobile ? "column-reverse" : "row"}
            container
            spacing={6}
          >
            <Grid item md={6} xs={12}>
              <figure className={classes.illustration}>
                <img src="/images/hosting/illustration1.png" alt="feature" />
              </figure>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={classes.text}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInLeftShort"
                  delay={400}
                  duration={0.3}
                >
                  <div>
                    <Title
                      caption="hosting-landing.banner_label"
                      text="hosting-landing.banner_label"
                      align={isMobile ? "center" : "left"}
                    />
                    <div className={isMobile ? align.textCenter : ""}>
                      <Typography
                        className={text.subtitle2}
                        align={isMobile ? "center" : "left"}
                      >
                        {"hosting-landing.banner_label"}
                      </Typography>
                      <Button variant="contained" color="primary">
                        {"hosting-landing.banner_label"}
                      </Button>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </Grid>
          </Grid>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.item}>
          <Grid container spacing={6}>
            <Grid item md={6} xs={12}>
              <div className={clsx(classes.text, align.textRight)}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInLeftShort"
                  delay={400}
                  duration={0.3}
                >
                  <div>
                    <Title
                      caption={"hosting-landing.banner_label"}
                      text={"hosting-landing.banner_label"}
                      align={isMobile ? "center" : "right"}
                    />
                    <div className={isMobile ? align.textCenter : ""}>
                      <Typography
                        className={text.subtitle2}
                        align={isMobile ? "center" : "right"}
                      >
                        {"hosting-landing.morefeature_desc2"}
                      </Typography>
                      <Button variant="contained" color="primary">
                        {"hosting-landing.learnmore"}
                      </Button>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <figure className={classes.illustration}>
                <img src="/images/hosting/illustration2.png" alt="feature" />
              </figure>
            </Grid>
          </Grid>
        </div>
        <Divider className={classes.divider} />
        <div className={clsx(classes.item, classes.last)}>
          <Grid container>
            <Grid item sm={12}>
              <div className={clsx(classes.text, align.textCenter)}>
                <Title
                  caption={"hosting-landing.morefeature_headtitle3"}
                  text={"hosting-landing.morefeature_title3"}
                  align="center"
                />
                <Typography className={text.subtitle2}>
                  {"hosting-landing.morefeature_desc3"}
                </Typography>
                <Button variant="contained" color="primary">
                  {"hosting-landing.learnmore"}
                </Button>
              </div>
              <figure className={classes.illustration}>
                <img src="/images/hosting/illustration3.png" alt="feature" />
              </figure>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default MoreFeature;
