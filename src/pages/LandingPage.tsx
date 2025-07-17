import TreeList from "../components/TreeList";
import { heading } from "../utils/heading";

export default function LandingPage() {
  return (
    <div>
      <h1>{heading}</h1>
      <TreeList />
    </div>
  );
}
