import "./Navbar.css";

function Navbar() {
  return (
    <nav className="site-navbar">
      <ul>
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#etudiants">Étudiants</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;