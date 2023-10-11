import './series.css'
const Series = ({ListsS}) =>{

    return(
        <>
        {ListsS.map((ListS)=>
        <>
        <div className="serie">
        <img src={ListS.img} alt={ListS.nome}/>
        <p>{ListS.nome}</p>
        <p className="descricao">{ListS.descricao}</p>

        </div>
        
        </>
        )}
        </>
    )
}
export default Series;