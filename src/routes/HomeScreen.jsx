import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomeScreen = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Technology</th>
                        <th scope="col">Email</th>
                        <th scope="col">Social</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{user.name}</th>
                        <td>{user.technology}</td>
                        <td>{user.email}</td>
                        <td>{user.social}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
