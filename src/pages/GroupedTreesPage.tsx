import GroupedTrees from "../components/GroupedTrees";
import { heading } from "../utils/heading";

export default function GroupedTreesPage() {
  return (
    <div>
      <h1>
        {heading} <span className="heading__grouped">grouped</span>
      </h1>
      <GroupedTrees />
    </div>
  );
}
