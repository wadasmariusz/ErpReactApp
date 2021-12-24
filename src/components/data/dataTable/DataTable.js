import React from "react";

export const DataTable = ({ children, header = [] }) => {
  const width = header.reduce((acc, [, size]) => acc + size, 0);

  return (
    <div className="overflow-auto d-flex">
      <table className="user-list-table table table-borderless dataTable no-footer dtr-column collapsed rounded-top m-0">
        <thead className="thead">
          <tr className="bg-transparent border-bottom">
            {header.map(([label, colSize], i) => (
              <th
                style={{
                  width: `${Math.round((colSize / width) * 10000) / 100}%`,
                }}
                key={i}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
