import React from "react";

import {useState,useEffect} from 'react';

const FetchAp=()=>
{
  const [Data, setData] = useState([]);
  const getData= async ()=>
  {
    const respone= await fetch("https://bg.annapurnapost.com/api/category-menu/province?province=5");
    setData(await respone.json());
  }
  useEffect(()=>
  {
  getData();
  },[]);
 
   return<div>
     {
   
   Data.map((user)=>
  (
  <p>hel{user.name}</p>
  )
}

  </div>
}

export default FetchAp;