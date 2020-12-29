import React from "react";
import { Link } from "react-router-dom";

function IngredientRow(props) {
  return props.stateIngredient.map(d => (
    <tr key={d.id}>
      <td>
        <input
          type="checkbox"
          checked={d.select}
          onChange={e => {
            let value = e.target.checked;
            props.setIngredientState(
              props.stateIngredient.map(sd => {
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
     
      <td className="text-right">
        <Link to={`editIngredient/${d.id}`}>
          <button className="btn btn-primary btn-sm">Güncelle</button>
        </Link>
      </td>
    </tr>
  ));
}

export default IngredientRow;
