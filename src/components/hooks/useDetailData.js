import { useState, useEffect } from 'react';

const useDetailData = (id, getData, getImageUrl) => {
  const [item, setItem] = useState();
  const [image, setImage] = useState();
  const [isPending, setIsPending] = useState(false);

  const updateItem = (id) => {
    if (!id) {
      return
    }

    setIsPending(true);
    getData(id)
        .then((data) => {
          setItem(data);
          setImage(getImageUrl(data));
        })
        .finally(() => setIsPending(false));
  };

  useEffect(() => {
    updateItem(id);
  }, [id]);

  return [item, image, isPending];
}

export default useDetailData;