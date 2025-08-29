import Header from "./components/Header";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState<"home" | "projects" | "about">("home");

  return (
    <>
      <Header currentPage={page} setPage={setPage} />
      <Layout>
        {page === "home" && <Home />}
        {page === "projects" && <Projects />}
        {page === "about" && <About />}
      </Layout>
    </>
  );
}
