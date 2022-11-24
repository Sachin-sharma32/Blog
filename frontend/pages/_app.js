import Header from "../components/Header";
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <div className=" bg-green-100 min-h-screen p-2 sm:p-10">
                <Header />
                <Component {...pageProps} />
            </div>
        </Provider>
    );
}

export default MyApp;
