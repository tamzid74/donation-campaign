import { NavLink } from "react-router-dom";


const Error = () => {
    return (
        <div className="h-screen flex flex-col gap-2 justify-center items-center">
            <h1>No Data Found</h1>
            <NavLink to="/">
                <button className="btn btn-primary">GO HOME</button>
            </NavLink>
            
        </div>
    );
};

export default Error;