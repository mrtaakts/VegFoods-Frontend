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
    <div>
      <div>
      <Link to="/add">
        <button className="btn btn-primary btn-sm m-2">Add Category</button>
      </Link>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => {
          deleteCategoryByIds();
        }}
      >
        Delete Category
      </button>
    
      </div>
 
      <table className="table table-striped">
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
            <th scope="col">#</th>
            <th scope="col">Name</th>
          
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <CategoryRow
            stateCategory={stateCategory}
            setCategoryState={setCategoryState}
          />
        </tbody>
      </table>
    </div>
  );
}

export default Category;
