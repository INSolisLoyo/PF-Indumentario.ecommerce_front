import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../axios/axios";
import DetailGallery from "../DetailGallery/DetailGallery";
import heart from '../../img/heart.png'
import { getColors } from "./Colors";


const Detail = () => {
    
    const { id } = useParams();
    const PRODUCT = `/product/${id}`;
    const [counter, setCounter] = useState(1);
    const [item, setItem] = useState({
        id: '',
        name: '',
        price: '',
        images: [],
        colours: [],
        material: ''
    });


    const cleaner =  ({id, name, price, images, colour, material}) => {

        const galleryImages = images?.map( (image) => {
            return {
                original: image,
                thumbnail: image
            }
        })

        const materials = material?.join(', ');

        const newColors = colour?.map((color) => getColors(color)) 

        setItem(
            {
                id: id,
                name: name,
                price: price,
                images: galleryImages,
                colours: newColors,
                material: materials
            }
        )
        
    }

    const handleCounter = (op) => {

        if(op === '-'){
            counter > 1 && setCounter(counter - 1)
        }
        else{
            setCounter( counter + 1)
        }
    }

    useEffect( () => {

        const fetchData = async () => {
            try {
                const {data}  = await axios.get(PRODUCT);    
                
                if(data){
                    cleaner(data);  
                }
                else{
                    alert(`Doesn't exist any product with this id: ${id}`);
                }   
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
        
        
    }, [id])


    return (

        <div className="w-11/12 h-auto pt-20 mx-auto font-RedHat flex flex-col gap-4 lg:flex-row">

            {/* aquí va la gallery */}
            <DetailGallery images={item.images} />

            <div className="w-full md:h-full lg:w-2/5">

                <div className="bg-primary/10 rounded-2xl md:h-5/6 p-4 flex flex-col items-center md:p-8">

                    <div className="w-full flex justify-between">
                        <h1 className="font-semibold text-xl tracking-widest">{item.name}</h1>
                        <img src={heart} alt="heart" 
                            className="max-w-6 max-h-6"
                        />
                    </div>

                    <div className="md:w-full bg-primary/20 mt-4 rounded-2xl flex flex-col p-4">
                       
                        <div className="mt-5 flex justify-between">
                            <p className="font-semibold text-2xl tracking-widest">${item.price}</p>
                            <div className="flex gap-4 text-lg">
                                <span className="bg-primary/50 hover:bg-primary rounded-2xl py-0.5 px-4" 
                                onClick={() => handleCounter('-')}>-</span>
                                <span>{counter}</span>
                                <span className="bg-primary/50 hover:bg-primary rounded-2xl py-0.5 px-4" 
                                    onClick={() => handleCounter('+')}
                                >+</span>
                            </div>
                        </div>

                        <p className="mt-2 text-sm"><span className="font-semibold">Material:</span> {item.material}</p>

                        <div className="mt-2 flex flex-col gap-2 md:flex-row">

                            <div className="flex flex-col gap-2 mx-auto" id='colors'>
                                
                                <p className="text-center font-semibold text-lg">Color</p>
                                <div className="flex gap-2 mx-auto justify-center">

                                    {
                                        
                                        item.colours?.map( (color, index) => {
                                            
                                            return (
                                                <span 
                                                    key={index}
                                                    className={`w-6 h-6 ${color} rounded-full hover:border cursor-pointer`}
                                                ></span>
                                            )
                                        })
                                    }
                                
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 mx-auto">

                                <p className="text-center font-semibold text-lg">Size</p>
                                <div className="flex mx-auto justify-center text-md">
                                    <span className=" hover:bg-primary rounded-2xl py-0.5 px-2 cursor-pointer">XS</span>
                                    <span className="hover:bg-primary rounded-2xl py-0.5 px-2 cursor-pointer">S</span>
                                    <span className="hover:bg-primary rounded-2xl py-0.5 px-2 cursor-pointer">M</span>
                                    <span className="hover:bg-primary rounded-2xl py-0.5 px-2 cursor-pointer">L</span>
                                    <span className="hover:bg-primary rounded-2xl py-0.5 px-2 cursor-pointer">XL</span>
                                </div>
                            </div>


                        </div>
                        
                    </div>

                </div>

                <div className="flex justify-center items-center pt-4 md:h-1/6">
                
                    <button 
                    className="w-full h-8 bg-primary/70 hover:bg-primary rounded-2xl py-2 text-black md:w-2/4 lg:w-1/4">Go</button>

                </div>

            </div>


        </div>

    )

}

export default Detail;