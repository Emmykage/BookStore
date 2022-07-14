import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { checkSatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const passStat = useSelector((state) => state.categories);
  const checkStat = () => {
    dispatch(checkSatus);
  };
  return (
    <div>
      <p>

        {passStat[0]}
      </p>
      <button onClick={checkStat} type="button">Check Status</button>
    </div>
  );
};

export default Categories;
