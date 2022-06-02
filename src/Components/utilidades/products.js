const productos = [
    {
        id: 1,
        nombre: "Boxer Armour",
        precio: 1500,
        stock: 10,
        image: './boxer-Armound.jpg',
        categoria: 'boxers'
    },
    {
        id: 2,
        nombre: "Gorras",
        precio: 2299,
        stock: 20,
        image: './gorras.jpg',
        categoria: 'gorras'
    },
    {
        id: 3,
        nombre: "Boxer Tommy",
        precio: 2000,
        stock: 15,
        image: './boxer-tommy.jpg',
        categoria: 'boxers'
    }
]

const producto = {
    id: 1,
    nombre: "Boxer Armour",
    precio: 1500,
    stock: 10,
    image: './boxer-Armound.jpg',
    descripcion: 'Descripcion: Boxer de excelente calidad, en varios colores'
}

export default productos
export { producto }