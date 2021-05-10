import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {getReactRepositories} from './api/api';
import { v1 } from 'uuid';
import CodingTask from './CodingTask/CodingTask';
import BonusTask from './BonusTask/BonusTask';

export type ItemType = {
  id: string
  name: string
  stars: number
  forks: number
  url: string
}

export type DataType = ItemType []


function App() {

  const [data, setData] = useState<DataType>([]);
  const [isCollapsed, setCollapseMode] = useState(true);

  useEffect(() => {
    getReactRepositories()
        .then((repos: DataType) => {
          const newRepos = repos.map( (r: ItemType) =>  ({...r, id: v1()}))
          setData(newRepos);
        })
  });

  const onClickHandler = () => {
    setCollapseMode(!isCollapsed);
  }

  return (
      <div className={s.app}>
        <CodingTask data={data}/>
        <BonusTask data={data}
                   isCollapsed={isCollapsed}
                   onClickHandler={onClickHandler}
        />
      </div>
  );
}

export default App;
