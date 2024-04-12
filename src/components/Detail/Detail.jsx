import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "../../axios/axios";
import DetailGallery from "../DetailGallery/DetailGallery";
import { getColors } from "./Colors";
import useCartStore from "../GlobalStoreZustand/useCartStore";
import useFavoriteStore from "../GlobalStoreZustand/useFavoriteStore"; 

const Detail = () => {
  const { addToFavorites, favorites, removeFromFavorites } = useFavoriteStore(); 
  const [isFavorite, setIsFavorite] = useState(false);

  const { id } = useParams();
  const STOCK = `/stock/${id}`;
  const PRODUCT = `/product/${id}`;
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [stock, setStock] = useState({});
  const [counter, setCounter] = useState(1);
  const [item, setItem] = useState({
    id: "",
    name: "",
    price: "",
    images: [],
    colours: [],
    material: "",
  });
  const [itemFav, setItemFav] = useState({
    id: "",
    name: "",
    price: "",
    images: [],
  });

  const [errors, setErrors] = useState({
    maxItems: "",
    noSizeSelected: "",
  });

  const cleanerProduct = ({ id, name, price, images, colour, material }) => {
    const galleryImages = images?.map((image) => ({
      original: image,
      thumbnail: image,
    }));
    const materials = material?.join(", ");
    const newColors = colour?.map((color) => getColors(color));

    setItem({
      id: id,
      name: name,
      price: price,
      images: galleryImages,
      colours: newColors,
      material: materials,
    });

    setItemFav({
      id: id,
      name: name,
      price: price,
      images: images,
    });
  };

  const cleanerStock = (stocks) => {
    const grupos = {};

    stocks.forEach((objeto) => {
      const { colour, amount, size } = objeto;

      if (!grupos[colour]) {
        grupos[colour] = [];
      }

      grupos[colour].push({ amount, size });
    });

    setStock(grupos);

    if (!selectedColor) {
      const firstProperty = Object.keys(grupos)[0];
      setSelectedColor(firstProperty);
    }
  };

  const handleCounter = (op) => {
    if (!selectedSize) return;

    if (op === "-") {
      setCounter(counter > 1 ? counter - 1 : 1);
      setErrors({ ...errors, maxItems: "" });
    } else {
      const maxItems = stock[selectedColor]?.find(
        (size) => size.size === selectedSize
      )?.amount;

      if (counter < maxItems) {
        setCounter(counter + 1);
        setErrors({ ...errors, maxItems: "" });
      } else {
        setErrors({
          ...errors,
          maxItems: `You can only buy ${maxItems} units of this product`,
        });
      }
    }
  };

  const handleClickColor = (color) => {
    setSelectedColor(color);
    setSelectedSize("");
    setCounter(1);
    setErrors({ ...errors, maxItems: "" });
  };

  const handleSizeClick = (size) => {
    setDisabledButton(false);
    setSelectedSize(size);
    setCounter(1);
    setErrors({ ...errors, maxItems: "" });
    setErrors({ ...errors, noSizeSelected: "" });
  };

  const handleClickButton = () => {
    if (!selectedSize) {
      setErrors({
        ...errors,
        noSizeSelected: "Please, choose a size",
      });
      setDisabledButton(true);
      return;
    } else {
      const maxItems = stock[selectedColor]?.find(
        (size) => size.size === selectedSize
      )?.amount;

      const selectedProduct = {
        id: item.id,
        images: item.images[0].original,
        name: item.name,
        price: item.price,
        stock: maxItems,
        quantity: counter,
        color: selectedColor,
        size: selectedSize,
      };

      useCartStore.getState().addToCart(selectedProduct);

      Swal.fire({
        icon: "success",
        title: "Product added to cart!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = (await axios.get(PRODUCT)).data;
        const stockData = (await axios.get(STOCK)).data;

        if (productData) {
          cleanerProduct(productData);
        } else {
          alert(`Doesn't exist any product with this id: ${id}`);
        }

        if (stockData) {
          cleanerStock(stockData);
        }
      } catch (error) {
        console.log(error);
      }

      if (selectedSize) {
        setDisabledButton(false);
        setErrors({
          ...errors,
          noSizeSelected: "",
        });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setIsFavorite(favorites.some((product) => product.id === item.id));
  }, [favorites, item.id]);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(itemFav.id);
    } else {
      addToFavorites(itemFav);
    }
  };

  return (
    <div className="w-11/12 h-auto pt-20 mx-auto font-RedHat flex flex-col gap-4 lg:flex-row">
      <DetailGallery images={item.images} />
      <div className="w-full md:h-full lg:w-2/5">
        <div className="bg-primary/10 rounded-2xl md:h-5/6 p-4 flex flex-col items-center md:p-8">
          <div className="w-full flex justify-between">
            <h1 className="font-semibold text-xl tracking-widest">
              {item.name}
            </h1>
            <div className="cursor-pointer">
              <span
                role="img"
                aria-label="corazon"
                style={{
                  fontSize: "23px",
                  verticalAlign: "middle",
                  display: "inline-block",
                  lineHeight: "30px",
                }}
                className="md:cursor-pointer top-1 right-1 p-1 bg-orange-200 my-2 mr-2 border-[1px] border-primary rounded-full w-[40px] h-[40px]"
                onClick={handleToggleFavorite}
              >
                {isFavorite ? "❤️" : "🤍"}
              </span>{" "}
            </div>
          </div>
          <div className="md:w-full bg-primary/20 mt-4 rounded-2xl flex flex-col p-4">
            <div className="mt-5 flex justify-between">
              <p className="font-semibold text-2xl tracking-widest">
                ${item.price}
              </p>
              <div className="flex gap-4 text-lg">
                <span
                  className="bg-primary/50 hover:bg-primary rounded-2xl py-0.5 px-4"
                  onClick={() => handleCounter("-")}
                >
                  -
                </span>
                <span>{counter}</span>
                <span
                  className="bg-primary/50 hover:bg-primary rounded-2xl py-0.5 px-4"
                  onClick={() => handleCounter("+")}
                >
                  +
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm">
              <span className="font-semibold">Material:</span> {item.material}
            </p>
            <div className="mt-2 flex flex-col gap-2 md:flex-row">
              <div className="flex flex-col gap-2 mx-auto" id="colors">
                <p className="text-center font-semibold text-lg">Color</p>
                <div className="flex gap-2 mx-auto justify-center">
                  {item.colours?.map((color, index) => (
                    <span
                      key={index}
                      className={`w-6 h-6 ${
                        color[0]
                      } rounded-full hover:border cursor-pointer ${
                        color[1] === selectedColor ? "border-4" : ""
                      }`}
                      onClick={() => handleClickColor(color[1])}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 mx-auto">
                <p className="text-center font-semibold text-lg">Size</p>
                <div className="flex mx-auto justify-center text-md">
                  {stock[selectedColor]?.map((size, index) => (
                    <span
                      key={index}
                      className={`hover:bg-primary rounded-2xl py-0.5 px-2 cursor-pointer ${
                        size.size === selectedSize ? "bg-primary" : ""
                      }`}
                      onClick={() => handleSizeClick(size.size)}
                    >
                      {size.size}
                    </span>
                  ))}
                </div>
                {errors.maxItems && (
                  <span className="text-sm text-red-500">
                    {errors.maxItems}
                  </span>
                )}
                {errors.noSizeSelected && (
                  <span className="text-sm text-red-500">
                    {errors.noSizeSelected}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-4 md:h-1/6">
          <button
            className="w-full h-8 bg-primary/70 hover:bg-primary rounded-2xl py-2 text-black md:w-2/4 lg:w-1/4"
            onClick={handleClickButton}
            disabled={disabledButton}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
