const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log(miURL.hostname); // www.ejemplo.org

console.log(miURL.pathname); // /cursos/programacion/

console.log(miURL.searchParams); // objeto de tipo URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }
console.log(miURL.searchParams.get('ordenar')); // 
console.log(miURL.searchParams.get('nivel'));
//console.log(miURL.searchParams.nivel); // It doesn't work
