
class Valids {

  static isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  static isPassword(value){
    let result = false;
    if(value == "" || value == undefined || value == null){
      return result;
    }
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*(.)\1)[0-9a-zA-Z]{8,}$/
    let validado = value.match(re);

    if (!validado) 
      result =  "La contraseña debe contener al menos 1 mayúscula, 1 minúscula, 1 número, sin signos y no se pueden introducir 2 caracteres iguales continuos";
    return result;
  }
  static textLength(value, min = 10,max = 10){
    let result = false;
    if(value != "" && value != undefined && value != null){
      if(value.length < min || value.length > max ){
          result = true;
      }
      if(result == true){
          result = "La longitud del campo no es valida";  
      }
    }else{
      result="Campo requerido **"
    }
    return result;
  }
  static isTheSame(value = '',value0 = '',label){
    let result = false;
    if(value == "" && value0 == '' || value == undefined && value0 == undefined || value == null &&value0 == null){

      result = 'Campo requerido **'
      return result
    }
    if(value !== value0){
      result = label
      return result
    }
  }
  static isValidMail(value, context){
    let result = false;
    
    if(value == "" || value == undefined || value == null){
      return result;
    }
    value = value.replace(/\s+/g, '');
    if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value)){
      result = "Correo electrónico es inválido. Favor de verificar.";
    }
    return result;
  }
  static isNumberLength(value, min = 10,max = 10, context ) {
    let result = false;

    if(value != ""){
      value = value.replace(/\s+/g, '');
      value = value.split('-').join('');
      value = value.split(' ').join('');
      if(value.length < min || value.length > max ){
          result = true;
      }
      if(!this.isNumeric(value)){
          result = true
      }
      if(result == true){
          result = "Solo se permiten números con un " + " mínimo " + min + " y máximo " + max ;  
      }
    }else{
      result="Campo requerido **"
    }
    return result;
  }

  static isTextLength(value, min = 1,max = 70 ) {
    let result = false;

    if(value != "" && value != undefined && value != null){
    
      if(value.length <= min ){
          result = true;
      }

      if(result == true){
          result = "La longitud del campo no es valida";  
      }
    }else{
      result="Campo requerido **"
    }
    return result;
  }

  static isValidData(data){
    for(let key in data){
      if(data[key] === undefined || data[key] === null){
        delete data[key]
      }else{
        data[key] = data[key]
      }
    }
    return data
  }
  static isValidAmount(value ,minCant=10 ) {
    let result = false;
    if(value != ""){
      let format = /[$]/;
      if(format.test(value)){
        value = value.replace('$','')
        Number(value)
      }
      if(value < minCant){
          result = true;
      }
      if(!this.isNumeric(value)){
          result = true
      }
      if(result == true){
          result = `La cantidad que estas ingresando no es permitida solo puedes enviar mas de ${minCant}.00` ;  
      }
    }else{
      result="Campo requerido **"
    }
    return result;
  }

}

export default Valids;