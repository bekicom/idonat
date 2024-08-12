import "./style.css";
import { IconMinus } from "@tabler/icons-react";

function Table({ title, data, actions }) {
  return (
    <div className="table_container">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            {title?.map((i, inx) => (
              <th title={i} key={inx}>
                {i}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((i, inx) => (
            <tr key={inx}>
              <td>{inx + 1}</td>
              {Object.values(i).map((item, index) => (
                <td key={index}>{item || <IconMinus />}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
