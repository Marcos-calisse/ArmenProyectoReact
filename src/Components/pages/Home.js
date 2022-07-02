import CardList from '../CardListContainer/CardList';

const Home = () => {
    

    return(
        <div className='containerContenidoHome'>
            <div className='containerImgBanner'>
                <img src='./banner.webp' alt='Banner' className='banner' />
            </div>
            <CardList titulo='Los Mejores Productos Aquí'/>
        </div>
    )
}

export default Home