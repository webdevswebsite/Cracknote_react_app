/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable quotes */
import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";

import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { useTranslation } from "next-i18next";
// import brand from "../../../public/text/brand";
// import routeLink from "../../../public/text/link";
import MobileMenu from "./MobileMenu";
import useStyles from "./header-style";
import navMenu from "./menu";

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return <AnchorLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function Header(props) {
  const [fixed, setFixed] = useState(false);
  let flagFixed = false;
  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = scroll > 100;
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const classes = useStyles();
  const theme = useTheme();
  const { invert } = props;
  // const { t } = useTranslation("common");

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [menuList] = useState([
    createData(navMenu[0], "#" + navMenu[0], 200),
    createData(navMenu[1], "#" + navMenu[1], 70),
    createData(navMenu[2], "#" + navMenu[2]),
    createData(navMenu[3], "#" + navMenu[3], 80),
    createData(navMenu[4], "#" + navMenu[4], 40),
  ]);
  console.log(menuList)
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Fragment>
      {isMobile && (
        <MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />
      )}
      <AppBar
        component="div"
        position="relative"
        id="header"
        className={clsx(
          classes.header,
          fixed && classes.fixed,
          openDrawer && classes.openDrawer
        )}
      >
        <div className={classes.headerTop}>
          <Container fixed={isDesktop}>
            <div className={classes.logo}>
              {isMobile && (
                <IconButton
                  onClick={handleOpenDrawer}
                  className={clsx(
                    "hamburger hamburger--spin",
                    classes.mobileMenu,
                    openDrawer && "is-active"
                  )}
                >
                  <span className="hamburger-box">
                    <span className={clsx(classes.bar, "hamburger-inner")} />
                  </span>
                </IconButton>
              )}
              {invert ? (
                <a href={"routeLink.hosting.home"}>
                  {/* <img src={''} alt="logo" /> */}
                  {"brand.hosting.name"}
                </a>
              ) : (
                  <AnchorLink href="#home">
                    <h4>Cracknote Technologies</h4>
                  {/* <img src={logo} alt="logo" /> */}
                  
                </AnchorLink>
              )}
            </div>
            <nav className={classes.userMenu}>
             
       
            </nav>
          </Container>
        </div>
 
      </AppBar>
    </Fragment>
  );
}

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  invert: PropTypes.bool,
};

Header.defaultProps = {
  sticky: false,
  invert: false,
};

export default Header;
