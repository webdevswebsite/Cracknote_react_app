/* eslint-disable quotes */
import React, { Fragment } from "react";
// import Head from "next/head";
// import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
// import brand from "../../../public/text/brand";
import RegisterForm from "../../components/Forms/Register";

function Register() {
  return (
    <Fragment>
      {/* <Head> */}
      <title>
        {/* {brand.hosting.name} */}
        &nbsp; - Register
      </title>
      {/* </Head> */}
      <div>
        <RegisterForm />
      </div>
    </Fragment>
  );
}

// const getStaticProps = makeStaticProps(["common"]);
// export { getStaticPaths, getStaticProps };

export default Register;
