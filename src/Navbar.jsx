import {Link} from "react-router-dom"
let Navbar = () => {
return (<div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">MoviesRentals</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Customers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Rentals</a>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link " to="/login" tabindex="-1" aria-disabled="true">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>)
};
export default Navbar;