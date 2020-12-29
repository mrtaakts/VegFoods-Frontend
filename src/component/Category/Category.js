import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryRow from "./CategoryRow";
import { Link } from "react-router-dom";

function Category() {
  const [stateCategory, setCategoryState] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    axios
      .get("https://localhost:44357/api/categories")
      .then(data => {
        let categories = data.data;
        setCategoryState(
          categories.map(d => {
            return {
              select: false,
              id: d.id,
              name: d.name,
           
            };
          })
        );
      })
      .catch(err => alert(err));
  };

  const deleteCategoryByIds = () => {
    let arrayids = [];
    stateCategory.forEach(d => {
      if (d.select) {
        arrayids.push(d.id);
      }
    });
    axios
      .delete(`https://localhost:44357/api/categories/${arrayids}`)
      .then(data => {
        console.log(data);
        getCategory();
      })
      .catch(err => alert(err));
  };

  return (
    <div  className="col-md-9 mx-auto mt-5">
  
 
      <table className="table table-striped text-center" style={{marginTop:"3vh" , backgroundColor:"white", color:"#737373"}}>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={e => {
                  let value = e.target.checked;
                  setCategoryState(
                    stateCategory.map(d => {
                      d.select = value;
                      return d;
                    })
                  );
                }}
              />
            </th>
            <th scope="col">#Id</th>
            <th scope="col">Kategori İsmi</th>
          
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <CategoryRow
            stateCategory={stateCategory}
            setCategoryState={setCategoryState}
            style={{backgroundColor:"white"}}
          />
        </tbody>
      </table>

      <div className="text-right" style={{color:"#737373"}}>
      <Link to="/addCategory">
        <button className="btn btn-primary btn-sm m-2">Kategori Ekle</button>
      </Link>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => {
          deleteCategoryByIds();
        }}
      >
        Kategori Sil
      </button>
    
      </div>
    </div>
  );
}

export default Category;
