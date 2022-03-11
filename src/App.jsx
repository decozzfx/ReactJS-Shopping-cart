import { useEffect, useState } from "react";
import CartSection from "./components/CartSection";
import Container from "./components/Container";
import Header from "./components/Header";
import { useDispatch } from "react-redux";

import mockData from './json/items.json'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch({ type : 'FETCH_DATA', payload : mockData})
  },[])
  
  return (
    <Container>
      <Header/>
      <CartSection/>
    </Container>
  );
}

export default App;
