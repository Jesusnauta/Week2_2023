 //para enviar un mensaje al usuario

import { factorial } from "./factorial.js";
try{
console.log(factorial(189));
} catch(error) {
  console.log(error.message);
}
