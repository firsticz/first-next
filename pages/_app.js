import '../styles/globals.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

const firebaseConfig = {
  apiKey: "AIzaSyDrWS0I35EIeuX0-KnsK8AO8I6HmNZlMdg",
  authDomain: "qrra-7cd65.firebaseapp.com",
  projectId: "qrra-7cd65",
  storageBucket: "qrra-7cd65.appspot.com",
  messagingSenderId: "980829579432",
  appId: "1:980829579432:web:1e88ed512f5aeae37fba9d",
  measurementId: "G-43FQ8MMQ8E"
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// console.log(analytics);

export default function App({ Component, pageProps }) {
  return  <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
  
}
