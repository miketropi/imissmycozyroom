import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ClassicTemplate() {
  return <div id="PAGE" className="classic-template-page">
    <Header />
    <main className="main-container">
      <Outlet />
    </main>
    <Footer />
  </div>
}