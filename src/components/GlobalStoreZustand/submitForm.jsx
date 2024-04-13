import axios from "../../axios/axios";

const submitForm = async (data) => {
  try {
    // Obtener el token de autenticación (debes obtenerlo de donde lo tengas almacenado)
    const token = localStorage.getItem("token");  // Ejemplo: si está guardado en el localStorage

    const response = await axios.post("/product/create", data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`  // Añadir el token en el encabezado
      },
    });
      
    if (response.status === 200) {
      console.log(response.data);
      // Aquí deberías manejar la respuesta, como actualizar el estado, mostrar una notificación, etc.
    }
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export default submitForm;
