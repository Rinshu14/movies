let Search=(props)=>
{
return (
    <>
     <p class="mt-4">{`Showing ${props.noOfMoviesInDatabse} movies from the database`}</p>
            <button type="button" class="btn btn-primary">New</button>

            <div class="input-group flex-nowrap mt-3">

                <input type="text" onChange={(e)=>
                {
                    props.Search(e.currentTarget.value);
                }}class="form-control" placeholder="Search...." aria-label="Username"
                    aria-describedby="addon-wrapping"
                    value={props.search}/>
            </div>
        
    </>
)

}
export default Search