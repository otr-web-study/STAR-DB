import { useState, useEffect } from 'react';

import Spinner from '../spinner';

import './item-list.css';

const ItemList = ({ getData, onItemSelected, renderItem }) => {
  const [itemList, setItemList] = useState();

  useEffect(() => {
    getData()
      .then((data) => {
        setItemList(data);

        if (data && data.length > 0) {
          onItemSelected(data[0].id);
        }
      })
  }, []);

  const renderItems = (arr) => arr.map(({ id, ...item }) => {
    const label = renderItem(item);

    return (
      <li className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
    )
  });

  const spinner = !itemList ? <Spinner /> : null;
  const content = itemList ? renderItems(itemList) : null

  return (
    <ul className="item-list list-group">
      {spinner}
      {content}
    </ul>
  );
}

export default ItemList;