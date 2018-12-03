import React, { Component } from "react";
import PropTypes from "prop-types";
class Form extends Component {
	static propTypes = {
		endpoint: PropTypes.string.isRequired
	};
	state = {
		name: "",
		genre: "",
		rating: "",
		comment: "",
		end_at: ""
	};
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();
		const { name, genre, rating, comment, end_at } = this.state;
		const book = { name, genre, rating, comment, end_at };
		const conf = {
			method: "post",
			body: JSON.stringify(book),
			headers: new Headers({ "Content-Type": "application/json" })
		};
		fetch(this.props.endpoint, conf).then(response =>
			console.log(response)
		);
	};
	render() {
		const { name, genre, rating, comment, end_at } = this.state;
		return (
			<div className="column">
				<form onSubmit={this.handleSubmit}>
					<div className="field">
						<label className="label">Name</label>
						<div className="control">
							<input
								className="input"
								type="text"
								name="name"
								onChange={this.handleChange}
								value={name}
								required
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Genre</label>
						<div className="control">
							<input
								className="input"
								type="text"
								name="genre"
								onChange={this.handleChange}
								value={genre}
								required
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Rating</label>
						<div className="control">
							<input
								className="input"
								type="text"
								name="rating"
								onChange={this.handleChange}
								value={rating}
								required
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">End At</label>
						<div className="control">
							<input
								className="input"
								type="date"
								name="end_at"
								onChange={this.handleChange}
								value={end_at}
								required
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Comment</label>
						<div className="control">
							<textarea
								className="textarea"
								type="text"
								name="comment"
								onChange={this.handleChange}
								value={comment}
								required
							/>
						</div>
					</div>
					<div className="control">
						<button type="submit" className="button is-info">
							Send message
						</button>
					</div>
				</form>
			</div>
		);
	}
}
export default Form;
