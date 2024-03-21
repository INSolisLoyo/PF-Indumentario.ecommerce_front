import React from 'react';

const garments = ['T-shirt', 'Pants', 'Dress', 'Sunsuit', 'Cap', 'Boots', 'Scarf', 'Jacket'];

const garmentImages = {
  'T-shirt': 'src/img/img1.png',
  'Pants': 'src/img/img8.png',
  'Dress': 'src/img/img4.png',
  'Sunsuit': 'src/img/img6.png',
  'Cap': 'src/img/img7.png',
  'Boots': 'src/img/img3.png',
  'Scarf': 'src/img/img2.png',
  'Jacket': 'src/img/img5.png',
 };

function generateRandomDate() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const dif = now - start;
    const day = Math.floor(dif / (1000 * 60 * 60 * 24));
    const randomDate = new Date(start.getTime() + (Math.random() * day * 24 * 60 * 60 * 1000));
    return randomDate.toLocaleDateString();
   }

   const Orders = () => {
    
    const generateOrders = () => {     // Genero una lista de órdenes con datos aleatorios
       const orders = [];
       for (let i = 0; i < 5; i++) { // Genero 5 órdenes como ejemplo
         const date = generateRandomDate();
         const garment = garments[Math.floor(Math.random() * garments.length)];
         const image = garmentImages[garment];
         orders.push({ date, garment, image });
       }
       return orders;
    };
   
    const orders = generateOrders();
   
    return (
       <div className='flex flex-col items-center justify-center font-RedHat space-y-4'>
          <h1 className=" p-4 text-[30px] font-bold text-black border-8 border-[#c17b60] border-double rounded-lg tracking-wide">ORDERS PLACED</h1>

        <div className='w-auto h-auto ml-52 mr-52 p-8 flex justify-center '>



         <ul>
           {orders.map((order, index) => (
             <li key={index}>
              <div className="flex justify-between items-center pt-6 space-x-14 space-y-1 bg-[#c17b6028]">
              <div >
                 <p class=" font-semibold italic text-xl tracking-wide bg-[#c17b6071] pb-1.5">Date: {order.date}</p>
                 <br></br>
                 <p class="font-semibold italic text-xl tracking-wide bg-[#c17b6071] ">Element: {order.garment}</p>                
              </div>              
                 <img className='w-14 h-24 ' src={order.image} alt={order.garment} />
                 </div>
             </li>
           ))}
         </ul>
        </div>
         
       </div>
    );
   };
   
   export default Orders;