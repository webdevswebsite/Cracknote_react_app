/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homenew";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
