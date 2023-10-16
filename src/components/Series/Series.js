import './series.css'
const Series = ({ListsS}) =>{

    return(
        <>
        {ListsS.map((ListS)=>
        <>
        <div className="serie">
        <figcaption>
        <img src={ListS.img} alt={ListS.nome}/>
        {/* <p className="destaque">Destaque</p> */}
        </figcaption>
        <p>{ListS.nome}</p>
        <p className="descricao">{ListS.descricao}</p>

        </div>
        
        </>
        )}
        </>
    )
}
export default Series;