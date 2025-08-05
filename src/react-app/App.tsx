import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "@/react-app/components/Layout";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import BoardPage from "@/react-app/pages/Board";
import GalleryPage from "@/react-app/pages/Gallery";
import ContactPage from "@/react-app/pages/Contact";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/diretoria" element={<BoardPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
