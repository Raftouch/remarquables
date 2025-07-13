import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TreesContext } from "../context/TreesContext";

export default function TreeDetailsPage() {
  const { trees, loading, error } = useContext(TreesContext);
  const { id } = useParams();

  const tree = trees.find((tree) => tree.com_idarbre === Number(id));

  return (
    <>
      {loading ? (
        <p className="loading">Chargement en cours...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="tree-details">
          <img className="tree-details__img" src={tree?.com_url_photo1} />
          <div className="tree-details__description">
            <h1>{tree?.com_nom_usuel}</h1>
            <h2>Nom latin : {tree?.com_nom_latin}</h2>
            <p>{tree?.com_resume}</p>
            <p>{tree?.com_descriptif}</p>
            <p>Annee de plantation : {tree?.com_annee_plantation}</p>
            <p>Arrondissement : {tree?.com_arrondissement}</p>
            <p>Adresse : {tree?.com_adresse}</p>
            <p className="tree-details__photo-credit">
              📷 Photo : {tree?.com_copyright1}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
