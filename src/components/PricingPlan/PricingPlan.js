/* eslint-disable quotes */
import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ScrollAnimation from "react-scroll-animation-wrapper";
// import { useTranslation } from 'next-i18next';
import Title from "../Title";
import PricingCard from "../Cards/Pricing";
import useStyles from "./pricing-plan-style";
import feature from "./listFeature";

function PricingPlan() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  // Translation Function
  // const { t } = useTranslation('common');

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Title
          caption="Hosting Pricing Table"
          text="Hosting for every website"
          align="center"
        />
        <div className={classes.pricingWrap}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUp"
            offset={-100}
            duration={0.3}
          >
            <div>
              <PricingCard
                title="Personal"
                price={3}
                img="/images/hosting/home.png"
                featureList={feature.personal}
                desc="Hatchling Plan"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUp"
            offset={-100}
            duration={0.4}
          >
            <div>
              <PricingCard
                title="Startup"
                price={8}
                highlighted
                img="/images/hosting/office.png"
                featureList={feature.personal}
                desc="Baby Plan"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUp"
            offset={-100}
            duration={0.5}
          >
            <div>
              <PricingCard
                title="Company"
                price={18}
                img="/images/hosting/company.png"
                featureList={feature.personal}
                desc="Business"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUp"
            offset={-100}
            duration={0.6}
          >
            <div>
              <PricingCard
                title="Big Shot"
                price={33}
                img="/images/hosting/world.png"
                featureList={feature.personal}
                desc="Enterprise"
              />
            </div>
          </ScrollAnimation>
        </div>
      </Container>
    </div>
  );
}

export default PricingPlan;
