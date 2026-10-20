import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import profil from "./assets/profil.jpg";
import profil2 from "./assets/profil2.jpg";
import profil3 from "./assets/profil3.jpg";
const etudiants = [
  {
    id: 1,
    prenom: "Slim",
    nom: "Boubaker",
    email: "slimboubaker@gmail.com",
    telephone: "+216 99 999 999",
    filiere: "Génie Logiciel et Systèmes d’Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: profil,
  },
  {
    id: 2,
    prenom: "Nouran",
    nom: "chikh",
    email: "nouranchikh@gmail.com",
    telephone: "+216 22 222 222",
    filiere: "Informatique de Gestion",
    anneeEtude: "2ème année",
    groupe: "BI",
    ville: "MAHDIA",
    image: profil2,
  },
  {
    id: 3,
    prenom: "Abd rahmman",
    nom: "sioud",
    email: "bon126@gmail.com",
    telephone: "+216 55 555 555",
    filiere: "Génie Logiciel",
    anneeEtude: "2ème année",
    groupe: "GLsi ",
    ville: "mahdia",
    image: profil3,
  },
];

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />

      <main className="main-content">
        <h2>Liste des étudiants</h2>

        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            Prenom={etudiant.prenom}
            nom={etudiant.nom}
            Email={etudiant.email}
            Téléphone={etudiant.telephone}
            Filière={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            Groupe={etudiant.groupe}
            Ville={etudiant.ville}
            image={etudiant.image}
          />
        ))}

      </main>

      <Footer />
    </div>
  );
}

export default App;