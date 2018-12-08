import React from 'react';
import { Mutation } from 'react-apollo';
import { ADD_TO_CART_MUTATION, CURRENT_USER_QUERY } from "../queries/queries";


export default class AddToCart extends React.Component {
	render() {
		const { id } = this.props;
		return (
			<Mutation mutation={ADD_TO_CART_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]} variables={{
				id: id
			}}>
				{(addToCart) => {
					return <button onClick={addToCart}>Add To Cart</button>
				}}
			</Mutation>
		);
	}
};
