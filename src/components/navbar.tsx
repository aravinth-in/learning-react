import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    };

    return ( 
    <div className="navbar">
        <div>
            <Link to="/"> Home </Link>
            {!user ? (<Link to="/login"> Login </Link>) :
            (<Link to="/createpost"> Create Post </Link>)}
            {user && (
                <>
                    <p> {user.displayName} </p>
                    <img
                        src={user?.photoURL || ""}
                        width="20"
                        height="20"
                        alt={user?.displayName || "User"}
                    />
                    <button onClick={signUserOut}> Logout </button>
                </>
            )}
        </div>
    </div>)
}