import React, {useMemo} from "react";
import {Cell, Pie, PieChart} from "recharts"
import {getLabel} from "views/app/Dashboard/View_Dashboard/cards/common/getLabel";

const colors = ['#7367f0', '#28c76f', '#ea5455', '#ff9f43', '#436eb3']


export const DovecoteTypeStats = ({dovecoteStats = []}) => {
  const data = useMemo(() => dovecoteStats?.map(({count, type}) => ({
          value: count,
          name: type?.name
        })
      )?.filter(({value}) => value),
      [dovecoteStats]
    )
  ;
  return <PieChart width={450} height={350}>
    <Pie data={data} dataKey={"value"} nameKey={"name"} cx="50%" cy="50%" innerRadius={60} outerRadius={100}
         label={getLabel}>
      {
        !!data?.length && data.map((entry, index) => <Cell key={entry?.name} fill={colors[index % colors.length]}/>)
      }
    </Pie>
  </PieChart>
}
