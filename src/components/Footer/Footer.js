/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LangIcon from "@material-ui/icons/Language";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";

// import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";

// import logo from "../../images/hosting-logo.svg";
// import brand from "../../../public/text/brand";
import img from "../../images/imgAPI";
// eslint-disable-next-line no-unused-vars
// import languageDetector from "../../lib/languageDetector";
// import i18nextConfig from '../../next-i18next.config';
import useStyles from "./footer-style";

function Copyright() {
  return (
    <Typography variant="body2" display="block" color="textSecondary">
      &copy; Cracknote Technologies Limited
      {/* {brand.hosting.footerText} */}
    </Typography>
  );
}

const footer = {
  title: "Quick Links",
  description: [
    "Resource",
    "Another resource",
    "Final resource",
    "Privacy policy",
    "Terms of use",
    "Terms Condition",
  ],
  link: [
    "#resource",
    "#another-resource",
    "#final-resource",
    "#privacy-policy",
    "#terms-of-use",
  ],
};

const news = [
  {
    type: "news",
    text: "Hosting this season",
    img: img.photo[4],
  },
  {
    type: "news",
    text: "",
    img: img.photo[1],
  },
  
];

function Footer(props) {
  const [ctn, setCtn] = useState(null);
  const classes = useStyles();

  // Translation Function
  // const router = useRouter();
  // const { t, i18n } = useTranslation('common');
  // const [values, setValues] = useState({
  //   lang: i18n.language
  // });

  useEffect(() => {
    setCtn(document.getElementById("main-wrap"));
  }, []);

  function handleChange(event) {
    // const lang = event.target.value;
    /*   let href = router.asPath;
    let pName = router.pathname;
    Object.keys(router.query).forEach((k) => {
      if (k === "locale") {
        pName = pName.replace(`[${k}]`, lang);
        return;
      }
      pName = pName.replace(`[${k}]`, router.query[k]);
    });
    if (lang) {
      href = pName;
    }

    setValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: lang,
    }));

    router.push(href);
    // languageDetector.cache(lang);
    if (lang === "ar") {
      props.toggleDir("rtl");
    } else {
      props.toggleDir("ltr");
    } */
  }

  return (
    <div className={classes.footer}>
      <Container fixed component="footer">
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <div className={classes.logo}>
              <h1 style={{ color:'#f50057'}}>Cracknote</h1>
              {/* <img src={logo} alt="logo" /> */}
              <Typography variant="h6" color="textPrimary">
                {/* {brand.hosting.projectName} */}
              </Typography>
            </div>
            <Typography
              color="textPrimary"
              className={classes.footerDesc}
              gutterBottom
            >
              <p>We also know that pros and newbies alike all want a hosting provider that’s easy and that works. So our robust web hosting tools get the job done right, and are designed so that when you grow, your site can grow with you too. A scalable solution, indeed.</p>
            </Typography>
            {/* <div className={classes.quickLinks}>
              <Typography
                variant="h6"
                className={classes.title}
                color="textPrimary"
                gutterBottom
              >
                banner title
              </Typography>
              <ul>
                {footer.description.map((item, index) => (
                  <li key={item}>
                    <Link
                      href={footer.link[index]}
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
          </Grid>
          <Grid item xs={12} md={4}>
            {news.map((item, index) => (
              <ButtonBase
                className={classes.blogItem}
                href="#"
                key={index.toString()}
              >
                <figure>
                  <img src={item.img} alt="thumb" />
                </figure>
                <div className={classes.listText}>
                  <Typography variant="button" className={classes.category}>
                    Updates for new offers
                  </Typography>
                  <Typography display="block" component="p">
                    Get the best at cheap prices
                  </Typography>
                </div>
              </ButtonBase>
            ))}
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.socmed}>
              <IconButton
                aria-label="FB"
                className={classes.margin}
                size="small"
              >
                <i className="ion-logo-twitter" />
              </IconButton>
              <IconButton
                aria-label="TW"
                className={classes.margin}
                size="small"
              >
                <i className="ion-logo-facebook" />
              </IconButton>
              <IconButton
                aria-label="IG"
                className={classes.margin}
                size="small"
              >
                <i className="ion-logo-instagram" />
              </IconButton>
              <IconButton
                aria-label="LI"
                className={classes.margin}
                size="small"
              >
                <i className="ion-logo-linkedin" />
              </IconButton>
            </div>
            <Select
              // eslint-disable-next-line no-undef
              // value={values.lang}
              onChange={handleChange}
              MenuProps={{
                container: ctn,
              }}
              startAdornment={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <InputAdornment className={classes.icon} position="start">
                  <LangIcon />
                </InputAdornment>
              }
              className={classes.selectLang}
              classes={{
                selectMenu: classes.selectMenu,
              }}
              input={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <OutlinedInput
                  labelWidth={200}
                  name="lang"
                  id="outlined-lang-simple"
                />
              }
            >
              {/* {i18nextConfig.i18n.locales.map((locale) => (
                <MenuItem key={locale} value={locale}>{t(locale)}</MenuItem>
              ))} */}
            </Select>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Footer.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  toggleDir: PropTypes.func,
};

Footer.defaultProps = {
  toggleDir: () => {},
};

export default Footer;
