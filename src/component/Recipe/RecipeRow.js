import React from "react";
import { Link } from "react-router-dom";

function RecipeRow(props) {

  return props.stateRecipe.map(d => (
    <tr key={d.id}>
      <td>
        <input
          type="checkbox"
          checked={d.select}
          onChange={e => {
            let value = e.target.checked;
            props.setRecipeState(
              props.stateRecipe.map(sd => {
                if (sd.id === d.id) {
                  sd.select = value;
                }
                return sd;
              })
            );
          }}
        />
      </td>
      <th scope="row">{d.id}</th>
      <td>{d.name}</td>
      <td>{d.categoryId}</td>
      <td>{d.description}</td>
     
     

      

   
      

     
      <td>
        <Link to={`edit/${d.id}`}>
          <button className="btn btn-primary btn-sm">Güncelle</button>
        </Link>
      </td>
    </tr>
  ));
}

export default RecipeRow;
