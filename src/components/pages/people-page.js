import { usePageState } from "../hooks";

import { PersonDetails, PersonList } from "../sw-components";
import Row from "../row/row";

const PeoplePage = () => {
  const [itemId, onItemSelected] = usePageState();

  return (
    <Row
      left={<PersonList onItemSelected={onItemSelected} />}
      right={<PersonDetails itemId={itemId} />} />
  );
}

export default PeoplePage;