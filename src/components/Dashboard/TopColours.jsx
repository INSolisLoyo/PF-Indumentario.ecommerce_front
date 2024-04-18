import React, { useState, useEffect } from 'react';
import { AreaChart } from '@tremor/react';
import axios from '../../axios/axios';

export default function TopColours() {
  const [chartData, setChartData] = useState([]);

  const dataFormatter = (number) => number.toString();

  useEffect(() => {
    const fetchTopColours = async () => {
      try {
        const response = await axios.get('/top-colours');
        const data = response.data.map((colour) => ({
          colour: colour.colour,
          count: colour.count,
        }));
        console.log("Datos obtenidos:", data); // Imprimir los datos obtenidos
        setChartData(data);
      } catch (error) {
        console.error('Error al obtener los colores más elegidos:', error);
      }
    };

    fetchTopColours();
  }, []);

  return (
    <div className='mt-[30px]'>
        <div className="title">
            <h2 className=' text-[22px] mb-3 ' >Top Colours</h2>
        </div>
      <AreaChart
        className="h-80"
        data={chartData}
        index="colour"
        categories={['count']}
        colors={['blue']}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
        onValueChange={(v) => console.log(v)}
      />
    </div>
  );
}
