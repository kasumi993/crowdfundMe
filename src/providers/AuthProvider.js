import { useEffect } from "react";
import { useRouter } from "next/router";
import firebase from "/firebase";

const AuthProvider = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (!user && !router.pathname.startsWith("/login")) {
                router.push("/login"); // Redirect to login page if user is not logged in
            }
        });

        return () => unsubscribe();
    }, [router]);

    return children;
};

export default AuthProvider;
