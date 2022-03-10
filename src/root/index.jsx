import React from "react";
import Navbar from "../components/Navbar";
import Sitebar from "../components/Sitebar";
import { Container } from "./styled";
import { navbar } from "../untils";
import { Navigate, Route, Routes } from "react-router-dom";
import Cargo from "../components/Cargo";
import Story from "../components/Story";

const Root = () => {

  return (
    <Container>
      <Cargo/>
      {/* // <Navbar/> */}
      {/* <Sitebar/> */}
      {/* {navbar.map(({ id, Element, pathname }) => (
        <div key={id} path={pathname}><h1>{Element}</h1> {console.log(Element, 'dsd')}</div>
      ))} */}
      {/* <Routes> */}
       {/* <Route element={<Navbar />}> */}
      {" "}
      {/* {navbar.map(({ id, Element, pathname }) => (
      //      <Route key={id} path={pathname} element={<Cargo/>} />
        //  ))} */}
      {" "}
      {/* <Route path='/cargo' element={< Cargo/>} /> 
   //     <Route path='/story' element={< Story/>} />  */}
       {/* </Route> */}
      {" "}
      {/* <Route path="*" element={<h1>Not Found</h1>} />
        //<Route path='/' element={<h1><Navigate to={'./cargo'} /></h1>} />  */}
       {/* </Routes> */}
    </Container>
  );
};

export default Root;
