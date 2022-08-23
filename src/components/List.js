import Item from './Item'

function List() {

    return(
       <>
            <h1>Minha Lista</h1>
           <ul>
               <Item marca="BMW" ano_lancamento={2003} />
               <Item marca="Ferrari" ano_lancamento={2022} />
           </ul>
       </> 
    )
}

export default List