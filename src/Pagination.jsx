let Pagination=(props)=>{
  let arr=[];
  for(let i=1;i<=props.noOfPages;i++)
  {
    arr.push(i);
  }
return(
    <div>
        <nav aria-label="...">
                <ul class="pagination pagination-sm">
                 { arr.map((e)=>{
                    return (<li onClick={()=>{
                      props.setSelectedPage(e);
                    }}class={`page-item ${(e==props.currPage)?"active":""} `}><a class="page-link" >{e}</a></li>)
                  })}
                 
                 
                </ul>
              </nav>
    </div>
)

}
export default Pagination