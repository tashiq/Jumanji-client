import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
    const { user, isLoading } = useAuth();
    // console.log(user.email, isLoading);
    return (
        <div>
            {
                !isLoading && <Route
                    {...rest}
                    render={({ location }) =>
                        user.email ? (
                            children
                        ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />
                        )
                    }
                />
            }
        </div>
    );
}
export default PrivateRoute;