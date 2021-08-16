import React from "react"
import Navbar from "./Navbar";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";

class App extends React.Component {

  state = {
    movies: [],
    genre: [],
    selectedFilter: "All Genre",//it is the filter that is selected by user
    search:""//it contains the string that is typed in search box
  }
  setFilter = (filter) => {
    this.setState({ selectedFilter: filter });
  }
  toggleLike = (id) => {
    let index=this.state.movies.findIndex((e) => {//it will find out the index of the id passed by table.jsx
      return e._id === id

    })
    let currMoviesArr=this.state.movies.filter((e)=>e)//copy the movies array into new variable currMoviesArr
   if(currMoviesArr[index].liked)//this liked key is used to decise wetheer the movie is liked by user or not in table.jsx
   {   //if our movies object have liked key then set it false
      currMoviesArr[index].liked=false;
   }
   else{
     //if our movies object have liked key already exist then it must be  false set true
     //if doesn't already exist then it will be created and set true
    currMoviesArr[index].liked=true;
   }
   this.setState({movies:currMoviesArr});
  }
  delete=(id)=>
  {
   let filteredArr=this.state.movies.filter((e)=>{//this will return all object of movies array other than given id
     return e._id!==id;
   })
    this.setState({movies:filteredArr});
  }
  Search=(val)=>//to store value of input box to search state
  {
    this.setState({search:val})
   
  }
  componentDidMount() {
    let f = async () => {
      let ResponseMovies = await fetch("/movies");//fetch is async function that gives result when its returned promise resolved  here that result is Responsemovies
      let ResponseGenre = await fetch("/genre");
      let moviesJson = await ResponseMovies.json();
      let genreJson = await ResponseGenre.json();

      this.setState({ movies: moviesJson, genre: genreJson });

    }
    f();
  }
  render() {

    return (
      <div>
        <Navbar />
        <div className="row">
          <Filter genre={this.state.genre}
            selectedFilter={this.state.selectedFilter}
            setFilter={this.setFilter} />

          <div className="col-9 p-3">
            {/* we are sending length of movie state to search bar to shoew no. of movies beacsue it contains all the movie and whnever we dlete a movie it reflected in movies state by delte function so this always have uptodate movies */}
            <Search  noOfMoviesInDatabse={this.state.movies.length} search={this.state.search} Search={this.Search} />
            <Table movies={this.state.movies} 
            selectedFilter={this.state.selectedFilter} 
            toggleLike={this.toggleLike}
             delete={this.delete}
             search={this.state.search} />
          </div>
        </div>
      </div>
    )
  }



}

export default App;
