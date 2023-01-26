import {
  useState, useEffect, useCallback, Fragment, Children, cloneElement
} from 'react';

import Spinner from '../spinner';

import './item-details.css';


const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
}

const ItemDetails = ({ itemId, getData, getImageUrl, children }) => {
  const [item, setItem] = useState();
  const [image, setImage] = useState();
  const [isPending, setIsPending] = useState(false);

  const updateItem = useCallback((itemId) => {
    if (!itemId) {
      return
    }

    setIsPending(true);
    getData(itemId)
        .then((data) => {
          setItem(data);
          setImage(getImageUrl(data));
        })
        .finally(() => setIsPending(false));
  }, []);

  useEffect(() => {
    updateItem(itemId);
  }, [itemId, updateItem]);

  const spinner = (!item || isPending) ? <Spinner /> : null;
  const content = (item && !isPending) ? (
    <ItemView item={item} image={image}>
      {Children.map(children, (child) => {
        return cloneElement(child, {item});
      })}
    </ItemView>
   ) : null;

  return (
    <div className="item-details card">
      {spinner}
      {content}
    </div>
  )
}

const ItemView = ({ item: { name }, image, children }) => {
  return (
    <Fragment>
      <img className="item-image"
        src={image}
        alt="item" />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {children}
        </ul>
      </div>
    </Fragment>
  )
}

export default ItemDetails;
export {
  Record,
  ItemView,
};