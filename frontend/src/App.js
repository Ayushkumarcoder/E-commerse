import { Container } from "react-bootstrap";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";


function App() {
  return (
    <>
      <Header></Header>
      
        <main className="py-3">
          <Container>
            <HomeScreen></HomeScreen>
          </Container>
        </main>
        <Footer></Footer>
      
    </>
  );
}

export default App;
