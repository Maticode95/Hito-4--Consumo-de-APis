import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
// import RegisterPage from "./components/Register";
// import LoginPage from "./components/Login";
// import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Navbar />

      <Pizza />
      { /* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}

      <Footer />
    </div>
  );
}

export default App;
