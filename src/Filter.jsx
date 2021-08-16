
let Filter = (props) => {
    return (
        <ul class="list-group m-5">
            <li onClick={()=>{props.setFilter("All Genre")}}//when ever we click on any filter than it call the setfilter in app.js that function will change the state selected filter so app.js get rerender and all its child will akso renreder and it new value of selected filter on basis of whic table rows get render
            class={`list-group-item ${(props.selectedFilter === "All Genre") ? "active" : " "}`}>all genre</li>
            {
                props.genre.map((e) => {//to loop on all genre array
                    return <li key={e._id} onClick={() => {
                        props.setFilter(e.name)
                    }} className={`list-group-item  ${(props.selectedFilter === e.name) ? "active" : " "}`}>{e.name}</li>
                })
            }
        </ul>
    )
}
export default Filter;