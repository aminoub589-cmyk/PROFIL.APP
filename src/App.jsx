import { useState } from "react";
import { Counter } from "./components/Counter.jsx";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";

import profil from "./assets/profil.jpg";
import profil2 from "./assets/profil2.jpg";
import profil3 from "./assets/profil3.jpg";

const donneesInitiales = [
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
    nom: "Chikh",
    email: "nouranchikh@gmail.com",
    telephone: "+216 22 222 222",
    filiere: "Informatique de Gestion",
    anneeEtude: "2ème année",
    groupe: "BI",
    ville: "Mahdia",
    image: profil2,
  },
  {
    id: 3,
    prenom: "Abderrahmen",
    nom: "Sioud",
    email: "bon126@gmail.com",
    telephone: "+216 55 555 555",
    filiere: "Génie Logiciel et Systèmes d’Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 1",
    ville: "Mahdia",
    image: profil3,
  },
];

function App() {
  const [etudiants, setEtudiants] = useState(donneesInitiales);
  const [filtre, setFiltre] = useState("Toutes");

  const filieres = [...new Set(etudiants.map((e) => e.filiere))];
  const etudiantsAffiches =
    filtre === "Toutes"
      ? etudiants
      : etudiants.filter((e) => e.filiere === filtre);

  function ajouterEtudiant() {
    const nouvelEtudiant = {
      id: Date.now(),
      prenom: "Nouveau",
      nom: "Étudiant",
      email: "nouveau@gmail.com",
      telephone: "+216 00 000 000",
      filiere: "Génie Logiciel et Systèmes d’Information",
      anneeEtude: "1ère année",
      groupe: "GLSI 1",
      ville: "Tunis",
      image: profil,
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  function handleDelete(id) {
    setEtudiants(etudiants.filter((e) => e.id !== id));
  }

  return (
    <div className="app-container">
      <Header />
      <Navbar />

      <main className="main-content">
        <h2>Liste des étudiants</h2>

        <Counter />

        <div className="ajout">
          <button onClick={ajouterEtudiant}>+ Ajouter un étudiant</button>
        </div>

        <div className="filtre">
          <label htmlFor="filtre-filiere">Filtrer par filière :</label>
          <select
            id="filtre-filiere"
            value={filtre}
            onChange={(e) => setFiltre(e.target.value)}
          >
            <option value="Toutes">Toutes</option>
            {filieres.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>

        {etudiantsAffiches.length === 0 && (
          <p className="vide">Aucun étudiant à afficher.</p>
        )}

        {etudiantsAffiches.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            {...etudiant}
            onDelete={() => handleDelete(etudiant.id)}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;