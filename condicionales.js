function condicional(n) {
  if (n == 1) {
    let edad = prompt("Ingrese su edad");
    if (edad < 0 || edad > 120) {
      return alert(
        "La edad no es valida (Eres una imposibilidad en este mundo)"
      );
    } else {
      if (edad >= 0 && edad <= 5) {
        return alert("Eres un bebe");
      } else if (edad >= 6 && edad <= 11) {
        return alert("Eres un niño");
      } else if (edad >= 12 && edad <= 18) {
        return alert("Eres un adolescente");
      } else if (edad >= 19 && edad <= 30) {
        return alert("Eres un joven");
      } else if (edad >= 31 && edad <= 64) {
        return alert("Eres un adulto");
      } else if (edad >= 65 && edad <= 120) {
        return alert("Eres un adulto mayor");
      }
    }
  } else if (n == 2) {
    let dia = prompt("Ingrese un dia de la semana");
    if (dia == "Lunes" || "lunes" || dia == "Martes" || "martes" || dia == "Miercoles" || "miercoles" || dia == "Jueves" || "jueves" || dia == "Viernes" || "viernes") {
      return alert("Es un dia de la semana");
    } else if (dia == "Sabado" || dia == "Domingo") {
      return alert("Es un fin de semana");
    } else {
      return alert("Por favor ingrese un dia de la semana válido");
    }
  } else if (n == 3) {
    let nro = prompt("Ingrese un número: ");
    if (nro % 1 > 0 && nro % 1 < 1) {
      return alert("Por favor ingrese un numero entero");
    } else {
      if (nro % 2 == 0) {
        return alert(`${nro} es un número par`);
      } else {
        return alert(`${nro} es un número impar`);
      }
    }
  } else if (n==4){
    let nombre= prompt("Ingrese su nombre: ");
    if (nombre=="Juan" || nombre=="juan"){
      return alert("Bienvenido Juan, gracias por confiar en nosotros!");
    } else {
      return alert("Lo sentimos pero no tienes acceso a este sitio...");
    }
  }
}
