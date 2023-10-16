import "./filmes.css"
const Filmes = ({ListsF}) =>{

    return(
        <>
    {ListsF.map((ListF) =>
    <>
    <div className="film">
    {/* <div className="des">
        <p className="">Destaque</p>
    </div> */}
    <div>
         <img src={ListF.img} alt={ListF.nome}/>
        
        <p>{ListF.nome}</p>
        <p className="descricao">{ListF.descricao}</p>
        
    </div>
    </div>
       
        
        
        </>
    )}
        </>
    )
}
export default Filmes;