function StudentCard(props) {
  return (
    <div className="container">
      <img src={props.image} alt="Profil étudiant" />

      <h2>Fiche étudiant</h2>

      <p>
        <strong>Nom & Prénom :</strong> {props.Prenom} {props.nom}
      </p>

      <p>
        <strong>Email :</strong> {props.Email}
      </p>

      <p>
        <strong>Téléphone :</strong> {props.Téléphone}
      </p>

      <p>
        <strong>Filière :</strong> {props.Filière}
      </p>

      <p>
        <strong>Année d'étude :</strong> {props.anneeEtude}
      </p>

      <p>
        <strong>Groupe :</strong> {props.Groupe}
      </p>

      <p>
        <strong>Ville :</strong> {props.Ville}
      </p>


    </div>
  );
}

export default StudentCard;