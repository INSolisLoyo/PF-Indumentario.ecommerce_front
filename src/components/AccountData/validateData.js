const validateData = (data, value, errors, setErrors) => {

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
        case 'lastname':
            if(value.length === 0){
                newErrors.lastname = 'Can\'t be empty'
            } else {
                if(value.length > 20){
                    newErrors.lastname = 'The length can\'t be longer than 20'
                } else {
                    if(!/^[a-zA-Z\s]+$/.test(value)){
                        newErrors.lastname = 'Only enter letters'
                    } else {
                        newErrors.lastname = ''
                    }
                }
            }       
            break;
        case 'birthdate':
            if(value.length === 0){
                newErrors.birthdate = 'Can\'t be empty'
            } else {
                newErrors.birthdate = ''
            }
            break;
        case 'email':
            if(value.length === 0){
                newErrors.email = 'Can\'t be empty'
            } else {
                if(value.length > 40){
                    newErrors.email = 'The length can\'t be longer than 20'
                } else {
                    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)){
                        newErrors.email = 'Enter a valid name'
                    } else {
                        newErrors.email = ''
                    }
                }
            }       
            break;
        case 'password':
            if(value.length === 0){
                newErrors.password = 'Can\'t be empty'
            } else {
                if(value.length > 20){
                    newErrors.password = 'The length can\'t be longer than 20'
                } else {
                    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!?#$]).{10,30}$/.test(value)){
                        newErrors.password = 'true'
                    } else {
                        newErrors.password = ''
                    }
                }
            }       
            break;
        case 'phone':
            if(value.length === 0){
                newErrors.phone = 'Can\'t be empty'
            } else {
                if(/ ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$ /.test(value)){
                    newErrors.phone = 'Enver a phone number valid'
                } else {
                    newErrors.phone = ''
                }
            }       
            break;
        case 'address':
            if(value.length === 0){
                newErrors.address = 'Can\'t be empty'
            } else {
                newErrors.address = ''
            }
            break;
        case 'city':
            if(value.length === 0){
                newErrors.city = 'Can\'t be empty'
            } else {
                if(value.length > 20){
                    newErrors.city = 'The length can\'t be longer than 20'
                } else {
                    if(!/^[a-zA-Z\s]+$/.test(value)){
                        newErrors.city = 'Only enter letters'
                    } else {
                        newErrors.city = ''
                    }
                }
            }       
            break;
        case 'state':
            if(value.length === 0){
                newErrors.state = 'Can\'t be empty'
            } else {
                if(value.length > 20){
                    newErrors.state = 'The length can\'t be longer than 20'
                } else {
                    if(!/^[a-zA-Z\s]+$/.test(value)){
                        newErrors.state = 'Only enter letters'
                    } else {
                        newErrors.state = ''
                    }
                }
            }       
            break;
        case 'country':
            if(value.length === 0){
                newErrors.country = 'Can\'t be empty'
            } else {
                if(value.length > 20){
                    newErrors.country = 'The length can\'t be longer than 20'
                } else {
                    if(!/^[a-zA-Z\s]+$/.test(value)){
                        newErrors.country = 'Only enter letters'
                    } else {
                        newErrors.country = ''
                    }
                }
            }       
            break;
        case 'zipcode':
            if(value.length === 0){
                newErrors.zipcode = 'Can\'t be empty'
            } else {
                if(value.length > 20){
                    newErrors.zipcode = 'The length can\'t be longer than 20'
                } else {
                    if(!/^\d{5}(?:[-\s]\d{4})?$/.test(value)){
                        newErrors.zipcode = 'Enter a valid zip code'
                    } else {
                        newErrors.zipcode = ''
                    }
                }
            }       
            break;
        default:
            break;     
        
    }

    setErrors(newErrors)

}

export default validateData;