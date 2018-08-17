# Control 1

## OOP

Hacer una clase `Person` que tenga el método `sayHi` que devuelve un `string`
con un saludo. Luego hacer dos clases Hijas: `Driver` que representa un
conductor de un coche y `Programmer`.

A estas dos clases hijas pueden ponerle los métodos y atributos que quieran,
pero la `Programmer` tiene que tener un método `.takeCoffe()`, que después de
invocarlo, al llamar a `sayHi` debe devolver el saludo en mayúsculas.

## Promesas

Promisificar el `setTimeout` para que esto funcione:

```javascript
const setTimeoutPromised = rellenar // ...

setTimeoutPromised(1500).then(() => console.log('He esperado 1,5 segundos'))
```

## Recursividad

Crear una función `removeDecimalNumbers()` que quite los elementos del array
que no son números enteros. **Hacerlo sin el `.filter`**.

```javascript
removeDecimalNumbers([1, 2, 3]) // => [1, 2, 3]
removeDecimalNumbers([1, 2, 3.1]) // => [1, 2]
removeDecimalNumbers([]) // => []
removeDecimalNumbers([1.2, 3.9]) // => []
```

Rellenen el código que hay en `src`
