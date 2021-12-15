import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import BookList from "./components/BookList";
import Box from "@material-ui/core/Box";
import "../src/index.css";

// Apollo
const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div id="main">
				<Box className="title" bgcolor="text.secondary" m={2} p={1} w={3}>
					Playground
				</Box>
				<BookList />
			</div>
		</ApolloProvider>
	);
}

export default App;
