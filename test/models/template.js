import Template from '../../src/models/template';

describe('Template model', () => {

	describe('create new template', () => {

		it('saves a new docment', () => {

			var templateDetails = new Template({
				name: "hello there!"
			});

			return templateDetails.save().then((savedDocument) => {

				expect(savedDocument).to.not.be.undefined;
				expect(savedDocument.id).to.not.be.undefined;

				console.log('savedDocument: ',savedDocument);
				console.log('templateDetails: ',templateDetails);

			});

		});

	});

});