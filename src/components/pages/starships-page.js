import { usePageState } from "../hooks";

import { StarshipDetails, StarshipList } from "../sw-components";
import Row from "../row/row";

const StarshipPage = () => {
  const [itemId, onItemSelected] = usePageState();

  return (
    <Row
      left={<StarshipList onItemSelected={onItemSelected} />}
      right={<StarshipDetails itemId={itemId} />} />
  );
}

export default StarshipPage;