import { gql } from "apollo-boost";

const getBooksQuery = gql`
	{
		books {
			name
			id
		}
	}
`;

const getBookQuery = gql`
	query ($id: ID) {
		book(id: $id) {
			id
			name
			genre
			author {
				id
				name
				age
				books {
					name
					id
				}
			}
		}
	}
`;
export { getBooksQuery, getBookQuery };
