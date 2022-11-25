import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
// import { useTranslation } from 'next-i18next';
import { useText } from "../../theme/common";
import useStyles from "./banner-style";

function Banner() {
  const classes = useStyles();
  const text = useText();
  const elem = useRef(null);

  // Media Query
  const theme = useTheme();
  // const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Translation Function
  // const { t } = useTranslation('common');

  const [ values, setValue ] = useState({
    name: "",
    domain: "com",
  });

  const [ hide, setHide ] = useState(false);

  const handleScroll = () => {
    if (!elem.current) {
      return;
    }
    const doc = document.documentElement;
    const elTop = elem.current.offsetTop - 200;
    const elBottom = elTop + elem.current.getBoundingClientRect().height;
    if (doc.scrollTop > elTop && doc.scrollTop < elBottom) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (window.VANTA !== undefined) {
      window.VANTA.NET({
        el: "#net_art",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
        backgroundAlpha: 0,
        points: 4.0,
        maxDistance: 18.0,
        spacing: 12.0,
      });
    }
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    document.getElementsByTagName("head")[ 0 ].appendChild(script);
  }, []);

  const handleChange = (event, type) => {
    setValue({ ...values, [ type ]: event.target.value });
  };

  return (
    <div className={classes.root} ref={elem}>
      <div className={classes.decoWrap}>
        <div className={clsx(classes.decoInner, hide && classes.hide)}>
          <div className={classes.illustration} id="net_art" />
        </div>
      </div>
      <Hidden smDown>
        <div className={classes.innerParallax}>
          <div className={classes.cloudWrap}>
            <ParallaxProvider>
              <Parallax
                y={[ 40, 40 ]}
                tagOuter="figure"
                className={classes.cloudParallax}
              >
                <div className={classes.cloudDeco} />
              </Parallax>
            </ParallaxProvider>
          </div>
        </div>
      </Hidden>
      <Container maxWidth="md">
        <div className={classes.bannerWrap}>
          <div className={classes.text}>
            <Typography variant="h4" className={text.title2}>
              <h4>Hosting for every website.</h4>
            </Typography>
            <Typography component="p" className={text.subtitle2}>
              <h6 style={{ color: '#fff' }}>Kindly fill in your domain details, submit, and your available domain details will be emailed to you (T&C Apply).  </h6>
            </Typography>
            <form>
              <div className="row">
                <div className="col-lg-10 col-md-6" style={{ marginBottom: '-30px' }}>
                  <div className="form-group  email-input">
                    <label className="fs-14 text-custom-black fw-500" style={{ fontWeight: '700' }} onBlur={(e) => {

                      localStorage.setItem('email', e.target.value)
                    }
                    }>Email Address:</label>
                    <input type="email" name="#" className="form-control form-control-custom" placeholder="Type your email"
                      onBlur={(e) => {
                        localStorage.setItem("email", e.target.value)
                      }}/>
                  </div>
                </div>

              </div>
              <Paper className={classes.searchDomain}>

                <TextField
                  className={classes.search}
                  label="Type your desired domain name here"
                  onChange={(e) => handleChange(e, "name")}
                
                />

                <div className={classes.action}>
                  <Hidden smDown>

                    <FormControl className={classes.formControl}>
                      <Select
                        value={values.domain}
                        onChange={(e) => handleChange(e, "domain")}
                        displayEmpty
                        name="domain"
                        className={classes.selectDomain}
                      >
                        <MenuItem value="com">.com</MenuItem>
                        <MenuItem value="net">.net</MenuItem>
                        <MenuItem value="org">.org</MenuItem>
                        <MenuItem value="co">.co</MenuItem>
                        <MenuItem value="biz">.biz</MenuItem>
                        <MenuItem value="gov">.gov</MenuItem>
                        <MenuItem value="id">.id</MenuItem>
                        <MenuItem value="abc">.abc</MenuItem>
                        <MenuItem value="xyz">.xyz</MenuItem>
                        <MenuItem value="news">.news</MenuItem>
                        <MenuItem value="cc">.cc</MenuItem>
                        <MenuItem value="me">.me</MenuItem>
                      </Select>
                    </FormControl>

                  </Hidden>
                  {/* <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                >
                  <SearchIcon className={classes.icon} />
                  {isDesktop && "Search"}
                </Button> */}
                </div>
              </Paper>
              <button onClick={
                (e) => {
                  e.preventDefault()
                  return window.FlutterwaveCheckout({
                    public_key: "FLWPUBK-00f1a8bfd678ad383f650cd6cccd643b-X",
                    // amount: total,
                    amount: 50,
                    currency: "USD",
                    tx_ref: new Date().toISOString(),
                    customer: {
                      email: localStorage.getItem("email"),
                    },
                    customizations: {
                      title: "CRACKNOTE TECHNOLOGES",
                    },
                    callback: async function () {
                      alert('Payment successful...We will reach out to you for further details')
                    },
                  });
                }
              } type="submit" href='#' className="submit-domain">Submit domain details</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
