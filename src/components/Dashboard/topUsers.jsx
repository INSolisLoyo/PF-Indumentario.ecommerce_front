import React, { useState, useEffect } from "react";
import { AreaChart } from "@tremor/react";
import axios from "../../axios/axios";

export default function TopUsers() {
  const [chartData, setChartData] = useState([]);

  const dataFormatter = (number) =>
    `$${Intl.NumberFormat("us").format(number).toString()}`;

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        const response = await axios.get("/top-users");
        const data = response.data.map((user) => ({
          date: user.userId.toString(), // Convertir userId a string
          orderCount: user.orderCount,
        }));
        console.log("Datos obtenidos:", data); // Imprimir los datos obtenidos
        setChartData(data);
      } catch (error) {
        console.error("Error al obtener los usuarios principales:", error);
      }
    };

    fetchTopUsers();
  }, []);

  return (
    <div>
      <div className="title">
        <h2 className=" text-[22px] mb-3 ">Top Users</h2>
      </div>
      <AreaChart
        className="h-80"
        data={chartData}
        index="date"
        categories={["orderCount"]}
        colors={["indigo"]}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
        onValueChange={(v) => console.log(v)}
      />
    </div>
  );
}
