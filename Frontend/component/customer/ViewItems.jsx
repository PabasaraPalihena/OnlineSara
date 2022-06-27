import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default function ViewItems() {
    const [items,setitems] = useState([]);

    //get all theaters from database
    const getAllItems = ()=>{
        Axios.get("http://localhost:3005/onlineSaraItem/").then((res)=>{
            console.log(res.data);
            setitems(res.data);
        });
    };

    useEffect(()=>{
        getAllItems();
    },[]);

  return (
    <div>
        <table border='1px solid'>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Size</th>
                    <th>Brand</th>
                    <th>Avaliable stock</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item)=>(
                <tr key={item._id}>
                    <td>{item.itemName}</td>
                    <td>{item.price}</td>
                    <td>{item.size}</td>
                    <td>{item.brand}</td>
                    <td>{item.itemCount}</td>
                    <td></td>
                    <td></td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}
