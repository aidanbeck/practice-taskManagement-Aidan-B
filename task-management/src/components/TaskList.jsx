import { Outlet, Link } from "react-router-dom";

const mockTasks = [
    { id: 0, title: "Dad's Birthday Gift", description: "Dad's birthday is coming up. Decide on a present for him so that it can be bought/ordered/made in time." },
    { id: 1, title: "Change USPS Address", description: "I am moving to St. Louis soon, and need to fill out the paperwork to change my address with the United States Postal Service." },
    { id: 2, title: "Create LinkedIn Profile", description: "As I progress professionally, I will need a LinkedIn profile. The one I have is bare bones, I should flesh it out." },
    { id: 3, title: "Pack Up Room", description: "I move back to St. Louis on Saturday, so I should be packed beforehand." },
]

function TaskList() {

    let tasksJSX = mockTasks.map( (task, index) => {
        let url = `/task/${task.id}`;
        return <div><Link to={url} key={index}>{task.title}</Link></div>
    });

    return (
        <div>
            <h1>Task List</h1>
            {tasksJSX}
        </div>
    );
}

export default TaskList;
export const tasks = mockTasks;