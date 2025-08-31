import Header from "./components/Header";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <>
      <Header />
      <Layout>
        <Home />
        <Projects />
      </Layout>
    </>
  );
}
