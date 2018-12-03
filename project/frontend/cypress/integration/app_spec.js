describe("Django REST framework / React quickstart app", () => {
	const book = {
		name: "Harry Potter and the Philosopher's Stone",
		genre: "Fantasy Novel",
		rating: "5",
		comment: "One of my favorite books.",
		end_at: "2018-12-04"
	};
	before(() => {
		cy.exec("npm run dev");
		cy.exec("npm run flush");
	});
	it("should be able to see the table", () => {
		cy.visit("/");
		cy.get("tr").contains(
			`${book.name}${book.genre}${book.rating}${book.comment}${
				book.end_at
			}`
		);
	});
	it("should be able to fill a web form", () => {
		cy.visit("/");
		cy.get('input[name="name"]')
			.type(book.name)
			.should("have.value", book.name);
		cy.get('input[name="genre"]')
			.type(book.genre)
			.should("have.value", book.genre);
		cy.get('input[name="rating"]')
			.type(book.rating)
			.should("have.value", book.rating);
		cy.get('input[name="end_at"]')
			.type(book.end_at)
			.should("have.value", book.end_at);
		cy.get('textarea[name="comment"]')
			.type(book.comment)
			.should("have.value", book.comment);
		cy.get("form").submit();
	});
	// more tests here
});
