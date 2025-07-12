import { useParams } from "react-router-dom";

export default function TreeDetailsPage() {
  const { id } = useParams();

  return <div>id : {id}</div>;
}
