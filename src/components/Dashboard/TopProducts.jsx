import React, { useState, useEffect } from 'react';
import { AreaChart } from '@tremor/react';
import axios from '../../axios/axios';

export default function TopProducts() {
  const [chartData, setChartData] = useState([]);

  const dataFormatter = (number) =>
    `$${Intl.NumberFormat('us').format(number).toString()}`;

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const response = await axios.get('/top-products');
        const data = response.data.map((product) => ({
          productId: product.productId.toString(),
          cartCount: product.cartCount,
        }));
        console.log("Datos obtenidos:", data); // Imprimir los datos obtenidos
        setChartData(data);
      } catch (error) {
        console.error('Error al obtener los productos principales:', error);
      }
    };

    fetchTopProducts();
  }, []);

  return (
    <div className='mt-[30px]'>
        <div className="title">
            <h2 className=' text-[22px] mb-3 ' >Top Products</h2>
        </div>
      <AreaChart
        className="h-80"
        data={chartData}
        index="productId"
        categories={['cartCount']}
        colors={['green']}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
        onValueChange={(v) => console.log(v)}
      />
    </div>
  );
}
