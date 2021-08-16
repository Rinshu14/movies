import React from "react";
import Pagination from "./Pagination"
import "./Table.css"

class Table extends React.Component {
  state = {
    currPage: 1,
  }
  setSelectedPage = (value) => {//this function get called whenever user clicks on page no.and then this change the state of currpage that will cause rerender and we get our clicked page highlighted
    this.setState({ currPage: value });
  }
  render() {

    let allmovies = this.props.movies;

    let currFilter = this.props.selectedFilter;//current filter is the filter that is selceted by  user
    let filteredMoviesArr = allmovies.filter((e) => {//creating new array on that filter basis that have movues of only that filter by using this new array we will create our table rows 
      if (currFilter === "All Genre") {//this function filters movies on basis of genre
        return e;
      }
      else {
        if (e.genre.name === currFilter) {
          return e;
        }
      }
    })
   filteredMoviesArr=filteredMoviesArr.filter((e)=>{//it will filter on the basus of serch string from the filterd movies on the basis pf genre
     let search=this.props.search.toLowerCase();
     let movieTitle=e.title.toLowerCase();
     return movieTitle.includes(search);
     

   })

    let noOfPages = Math.ceil(filteredMoviesArr.length / 4);
    let startIndex=(this.state.currPage-1)*4//start index in filterdmovies array from where we have to show our movie in cuurent page
    let endIndex=Math.min(filteredMoviesArr.length,this.state.currPage*4)//as start index
    let arrayToUse=filteredMoviesArr.slice(startIndex,endIndex);//making a another array from start index to last index to show on page
    return (
      <>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">RantalRate</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {
                arrayToUse.map((e) => {
                  return (<tr key={e._id} >
                    <td>{e.title}</td>
                    <td>{e.genre.name}</td>
                    <td>{e.numberInStock}</td>
                    <td>{e.dailyRentalRate}</td>
                    <td onClick={() => {
                      this.props.toggleLike(e._id);
                    }}>
                      {e.liked ? <span class="material-icons">

                        favorite
                        {/* //means filled  i.e liked by user*/}
                      </span> : <span class="material-icons">
                        favorite_border
                        {/* means unfilled */}
                      </span>}

                    </td>
                    <td><button onClick={() => {
                      this.props.delete(e._id);
                    }} class="table-delete-btn">delete</button></td>
                  </tr>
                  )

                })
              }
            </tbody>
          </table>
        </div>
        <Pagination noOfPages={noOfPages}
          setSelectedPage={this.setSelectedPage}
          currPage={this.state.currPage} />
      </>
    )
  }
}
export default Table;