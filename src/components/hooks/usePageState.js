import { useState } from "react";


const usePageState = (value) => {
  const [itemId, setItemId] = useState(value);

  const onItemSelected = (id) => setItemId(id);

  return [itemId, onItemSelected];
}

export default usePageState;