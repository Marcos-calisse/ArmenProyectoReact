import Container from 'react-bootstrap/Container'

const Nosotros = () => {
    return (
        <div>
            <Container>
                <h2>SOBRE AR-MEN</h2>
                <p>
                    La mejor variedad de ropa interior masculina
                    Somos un proyecto que siempre mira al futuro, buscando satisfacer la necesidad de cada persona. Ofrecemos productos y accesorios para hombres de distintas lineas, donde los compradores podrán obtenerlo desde la comodidad de su hogar. 
                    Ar-Men busca siempre tener la mayor variedad de mercancía así como de productos temporales o de edición limitada que se adaptan a cualquier presupuesto.
                </p>
                <div className="containerImgNosotros">
                    <img src='./imgNosotros.webp' alt='' />
                </div>
            </Container>
        </div>
    )
}

export default Nosotros