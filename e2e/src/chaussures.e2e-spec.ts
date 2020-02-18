import { browser, element, by } from 'protractor';
import { ChaussurePage } from './chaussure.po';

describe('test des buscuits', () => {

    let page: ChaussurePage;
    let nbChaussure: number;

    beforeEach(() => {
        page = new ChaussurePage();
        browser.get('/chaussures');
    });

    it('Recherche le lien d\'ajout de chaussures et clique dessus', () => {
        element.all(by.css('.card')).then(totalRows => {
            nbChaussure = totalRows.length;
            element(by.css('#addChaussuresLink')).click();
            expect(browser.driver.getCurrentUrl()).toContain('add-chaussure-form');
        });
    });

    it('Test du formulaire d\'ajout', () => {
        browser.get('/add-chaussure-form');
        page.completeAddForm();
        let submitBtn = element.all(by.css('#submit-button'));
        submitBtn.click().then(fn => {
            element.all(by.css('.card')).then(totalNewRows => {
                nbChaussure += 1;
                let compareChaussure = nbChaussure;
                expect(totalNewRows.length).toEqual(nbChaussure);
            });
        });
    });

});
