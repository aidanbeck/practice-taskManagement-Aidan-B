import { useParams } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { tasks } from './TaskList';

function TaskDetail() {

    const { id } = useParams(); // same as `const id = useParams.id;`

    if (!tasks[id]) { 
        return (
            <div>
                <h1>Error.</h1>
                <p>Task ID <em>"{id}"</em> could not be found.</p>
                <Link to='/'>Return Home</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>{tasks[id].title}</h1>
            <p>{tasks[id].description}</p>
            <Link to='/'>Return Home</Link>
        </div>
    );
}

export default TaskDetail;