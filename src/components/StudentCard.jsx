import { useState } from "react";

function StudentCard(props) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  return (
    <div className="student-card">
      <img src={props.image} alt={`${props.prenom} ${props.nom}`} />

      <h2>
        {props.prenom} {props.nom}
      </h2>

      <p>Filière : {props.filiere}</p>
      <p>Année : {props.anneeEtude}</p>
      <p>Groupe : {props.groupe}</p>
      <p>Ville : {props.ville}</p>

      <button onClick={() => setCoordonneesVisibles(!coordonneesVisibles)}>
        {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
      </button>

      {coordonneesVisibles && (
        <div className="coordonnees">
          <p>Email : {props.email}</p>
          <p>Téléphone : {props.telephone}</p>
        </div>
      )}

      <div className="actions">
        <button className="btn-secondaire" onClick={props.onEdit}>Modifier</button>
        <button className="btn-danger" onClick={props.onDelete}>Supprimer</button>
      </div>
    </div>
  );
}

export default StudentCard;