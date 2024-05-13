
function validateInput (a: number, b: number) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Los valores ingresados son incorrectos');
    }
    return true;
    }

    function add (a: number, b: number) {
        validateInput(a, b);
        return (a + b).toFixed(2);
      }
      
      function substract (a: number, b: number) {
        validateInput(a, b);
        return (a - b).toFixed(2);
      }
      
      function multiply (a: number, b: number) {
        validateInput(a, b);
        return (a * b).toFixed(2);
      }
      
      function divide (a: number, b: number) {
        validateInput(a, b);
        if (b === 0) {
          throw new Error('Error al dividir por cero');
        }  
        return (a / b).toFixed(2);
      }
      
      function pow (a: number, b: number) {
        validateInput(a, b);
        return (Math.pow(a, b)).toFixed(2);
      }
      
      function sqrt (a: number) {
       validateInput(a, a);
        if (a < 0) {
           throw new Error('No se puede calcular la raíz cuadrada de un número negativo');
        }
        return (Math.sqrt(a)).toFixed(2);
      }

export default {
    add: add,
    sub: substract,
    mul: multiply,
    div: divide,
    pow: pow,
    raiz: sqrt
}

