import { browser, by, element } from 'protractor';

export class ChaussurePage {

    sleep() {
        browser.driver.sleep(2000);
    }

    completeAddForm() {
        this.sleep();
        let nom = element.all(by.id('nom'));
        let marque = element.all(by.id('Adidas'));
        let type = element.all(by.id('type'));
        let taille = element.all(by.id('taille'));
        let date = element.all(by.id('date'));
        nom.sendKeys('test');
        marque.click();
        type.sendKeys('Sport');
        taille.sendKeys('43');
        date.sendKeys('23042012');
        browser.sleep(1500);
    }

}
