import NewsItems from "./components/newsitem/NewsItems";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Dish list</h1>
      <NewsItems />
      <Footer />
    </div>
  );
}

export default App;
