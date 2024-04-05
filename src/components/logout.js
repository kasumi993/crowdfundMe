import firebase from "/firebase";

const logOut = () => {
    const handleSignOut = async () => {
        try {
            await firebase.auth().signOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return <button onClick={handleSignOut}>Sign Out</button>;
};

export default logOut;
