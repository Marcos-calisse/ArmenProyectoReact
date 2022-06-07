const productos = [
    {
        id: 1,
        nombre: "Boxer Armour",
        precio: 1500,
        stock: 10,
        image: './boxer-Armound.jpg',
        categoria: 'boxers',
        descripcion: 'Boxer de excelente calidad, en varios colores'
    },
    {
        id: 2,
        nombre: "Gorras",
        precio: 2299,
        stock: 20,
        image: './gorras.jpg',
        categoria: 'gorras',
        descripcion: 'Gorras de la mejor calidad en PROMO'
    },
    {
        id: 3,
        nombre: "Boxer Tommy",
        precio: 2000,
        stock: 15,
        image: './boxer-tommy.jpg',
        categoria: 'boxers',
        descripcion: 'Boxers de primera'
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