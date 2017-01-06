import templateCtrl from '../../src/api/controllers/templateCtrl';
import Template from '../../src/models/template';
import chai from 'chai';

const expect = chai.expect;

describe('templateCtrl', () => {

	describe('getTemplateById', () => {

		it('has getTemplateById defined', () => { 

			expect(templateCtrl.getTemplateById).to.be.defined;

		});

	});

});