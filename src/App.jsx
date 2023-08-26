import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";

import {
  Header,
  Home,
  About,
  Contacts,
  Wheretobuy,
  Footer,
  Login,
  Products,
  Product,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />}>
              <Route path=":category" element={<Products />} />
            </Route>
            <Route
              path="products/:category/:productName"
              element={<Product />}
            />
            <Route path="about-us" element={<About />} />
            <Route path="where-to-buy" element={<Wheretobuy />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
