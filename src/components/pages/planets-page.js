import { usePageState } from "../hooks";

import { PlanetDetails, PlanetList } from "../sw-components";
import Row from "../row/row";

const PlanetPage = () => {
  const [itemId, onItemSelected] = usePageState();

  return (
    <Row
      left={<PlanetList onItemSelected={onItemSelected} />}
      right={<PlanetDetails itemId={itemId} />} />
  );
}

export default PlanetPage;