import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import BookList from "./components/BookList";

// Apollo
const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div id="main">
				<h1>Playground</h1>
				<BookList />
			</div>
		</ApolloProvider>
	);
}

export default App;
