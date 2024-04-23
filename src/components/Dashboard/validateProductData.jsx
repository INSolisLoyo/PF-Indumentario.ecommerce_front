

export const validateProductData = (data, value, errors, setErrors) => {

    const newErrors = { ...errors };

    switch(data){
        case 'name':
            if(value.length === 0){
                newErrors.name = 'Can\'t be empty'
            } else {
                if(value.length > 20){
                    newErrors.name = 'The length can\'t be longer than 20'
                } else {
                    if(!/^[a-zA-Z\s]+$/.test(value)){
                        newErrors.name = 'Only enter letters'
                    } else {
                        newErrors.name = ''
                    }
                }
            }       
            break;
        case 'price':
            if(value.length === 0){
                newErrors.price = 'Can\'t be empty'
            } else {
                if(value.length > 20){
                    newErrors.price = 'The length can\'t be longer than 20'
                } else {
                    if(!/^\d*\.?\d+$/.test(value)){
                        newErrors.price= 'Only enter numbers'
                    } else {
                        newErrors.price = ''
                    }
                }
            }
            break;
        case 'description':
            if(value.length === 0){
                newErrors.description = 'Can\'t be empty'
            } else {
                newErrors.description = ''
            }
            break;
        case 'material':
            if(value.length === 0){
                newErrors.material = 'Choose at least one'
            } else {
                newErrors.material = ''
            }
            break;
        case 'colour':
            if(value.length === 0){
                newErrors.colour = 'Choose at least one'
            } else {
                newErrors.colour = ''
            }
            break;
        default:
            break;     
    } 

    setErrors(newErrors)

}