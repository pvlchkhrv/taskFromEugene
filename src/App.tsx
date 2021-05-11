import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {getReactRepositories} from './api/api';
import { v1 } from 'uuid';
import CodingTask from './CodingTask/CodingTask';
import {WithCollapseMode} from './BonusTask/HOC';

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


  useEffect(() => {
    getReactRepositories()
        .then((repos: DataType) => {
          const newRepos = repos.map( (r: ItemType) =>  ({...r, id: v1()}))
          setData(newRepos);
        })
  });



  return (
      <div className={s.app}>
        <CodingTask data={data}/>
         <WithCollapseMode data={data} />
      </div>
  );
}

export default App;
