import "./filmes.css"
const Filmes = ({ListsF}) =>{

    return(
        <>
    {ListsF.map((ListF) =>
    <>
    <div className="film">
        <img src={ListF.img} alt={ListF.nome}/>
        <p>{ListF.nome}</p>
        <p className="descricao">{ListF.descricao}</p>
        
    </div>
        
        
        </>
    )}
        </>
    )
}
export default Filmes;