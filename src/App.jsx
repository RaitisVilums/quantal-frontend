import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Header,
  Home,
  About,
  Contacts,
  Wheretobuy,
  Footer,
  Login,
  Products,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/where-to-buy" element={<Wheretobuy />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
