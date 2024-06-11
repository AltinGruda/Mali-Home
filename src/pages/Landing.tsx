import "./Landing.css";
import FurnitureOne from "../assets/furniture/furniture-1.jpg";
import FurnitureTwo from "../assets/furniture/furniture-2.jpg";
import FurnitureThree from "../assets/furniture/furniture-3.jpg";
import FurnitureSix from "../assets/furniture/furniture-6.jpg";
import { Link } from "react-router-dom";

export function Landing2() {
  return (
    <div className="body">
      <header className="header" data-menustate="closed">
        <div className="grid-item  grid-item--primary">
          <img src={FurnitureOne} className="object-fit" alt="chair" />
          <a href="#" className="logo">
            <h1>Mali Home</h1>
          </a>
        </div>
        <div className="grid-item grid-item--secondary  grid-item--content">
          <article className="article">
            <h4>
              <span>2023</span> <span>2024</span>
            </h4>
            <p>
              Te Mali Home, besojmë në artin e prodhimit të mobiljeve të bukura.
              Pasioni ynë për përsosmërinë dhe përkushtimi ndaj kënaqshmërisë së
              klientëve na dallon nga të tjerët.
            </p>
          </article>
        </div>
        <div className="grid-item grid-item--secondary">
          <img src={FurnitureTwo} className="object-fit" alt="chair" />
        </div>
        <div className="grid-item grid-item--tertiary">
          <img src={FurnitureThree} className="object-fit" alt="chair" />
        </div>
        <div className="grid-item grid-item--tertiary grid-item--content">
          <article className="article">
            <h2 className="text-xl mb-4">
              Dëshironi të shihni produktet tona?
            </h2>
            <Link to="/products">
              <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded">
                Klikoni Këtu
              </button>
            </Link>
          </article>
        </div>
        <div className="grid-item grid-item--tertiary">
          <img src={FurnitureSix} className="object-fit" alt="chair" />
        </div>
      </header>

      <div className="loading-overlay">
        <span className="loading-overlay__content h1">Mali Home</span>
      </div>
    </div>
  );
}
