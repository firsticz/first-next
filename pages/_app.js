import '../styles/globals.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";


// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// console.log(analytics);

export default function App({ Component, pageProps }) {
  return  <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
  
}
