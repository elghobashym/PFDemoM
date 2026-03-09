
// Locator functions for Produkte page
import { Page } from '@playwright/test';

export default class ProduktePage {
	constructor(private page: Page) { }

	async clickProdukteLink() {
		await this.page.getByRole('link', { name: 'Produkte' }).hover();
		await this.page.getByRole('link', { name: 'Produkte' }).click();
	}
	async clickKreditkartenButton() {
    await this.page.getByRole('button', { name: 'Kreditkarten' }).click();
}
	async clickAnlegenButton() {
    await this.page.getByRole('button', { name: 'Anlegen' }).click();
}
	async clickKontenButton() {
    await this.page.getByRole('button', { name: 'Konten' }).click();
}
	async clickVorsorgeButton() {
    await this.page.getByRole('button', { name: 'Vorsorge' }).click();
}
	async clickVersichernButton() {
    await this.page.getByRole('button', { name: 'Versichern' }).click();
}
	async clickFinanzierenButton() {
    await this.page.getByRole('button', { name: 'Finanzieren' }).click();
}
navItemKreditkarten() {
    return this.page.getByLabel('Kreditkarten').getByTestId('hoverRevealContent-title');
}
navItemAnlegen() {
    return this.page.getByLabel('Anlegen').getByTestId('hoverRevealContent-title');
}
navItemKonten() {
    return this.page.getByLabel('Konten').getByTestId('hoverRevealContent-title');
}
navItemVorsorgen() {
    return this.page.getByLabel('Vorsorgen').getByTestId('hoverRevealContent-title');
}
navItemFinanzieren() {
    return this.page.getByLabel('Finanzieren').getByTestId('hoverRevealContent-title');
}
navItemVersichern() {
    return this.page.getByLabel('Versichern').getByTestId('hoverRevealContent-title');
}
widgetDigitalGoodsTitle() {
    return this.page.locator('#widget-digitalGoods-title');
}
widgetTravelFundsTitle() {
    return this.page.locator('#widget-travelFunds-title');
}
widgetMultibankingOpeningTitle() {
    return this.page.locator('#widget-multibankingOpening-title');
}
	async clickVisaClassicJetztBestellenLink() {
    await this.page.getByRole('link', { name: 'Visa Classic\u00A0 Jetzt bestellen' }).click();
}
	async clickVisaClassicMehrErfahrenLink() {
    await this.page.getByRole('link', { name: 'Visa Classic \u00A0 Mehr erfahren' }).click();
}
	async clickMastercardStandardJetztLink() {
    await this.page.getByRole('link', { name: 'Mastercard Standard\u00A0 Jetzt' }).click();
}
	async clickMastercardStandardMehrLink() {
    await this.page.getByRole('link', { name: 'Mastercard Standard \u00A0 Mehr' }).click();
}
fpuiProductCardWrapper() {
    return this.page.locator('fpui-product-card-wrapper');
}
	async clickDetailsGutscheineLink() {
    await this.page.getByRole('link', { name: 'Details Gutscheine' }).click();
}
pageTitle() {
    return this.page.locator('#page-title');
}
tbody() {
    return this.page.locator('tbody');
}
backNavButton() {
    return this.page.getByTestId('backNav-button');
}
fpuiActions() {
    return this.page.locator('fpui-actions');
}
fpuiCardPage() {
    return this.page.locator('fpui-card-page');
}
	async clickWeiterLink() {
    await this.page.getByRole('link', { name: 'Weiter', exact: true }).click();
}
currencySelect() {
    return this.page.getByTestId('currency-select');
}
selectOptionCHF() {
    return this.page.getByTestId('select-option-3941723');
}
selectOptionEUR() {
    return this.page.getByTestId('select-option-3941726');
}
selectOptionUSD() {
    return this.page.getByTestId('select-option-3941736');
}
selectOptionEGP() {
    return this.page.getByTestId('select-option-3941751');
}
	async clickWeiterMultibankingLink() {
    await this.page.getByRole('link', { name: 'Weiter Multibanking' }).click();
}
pageTitleMultibanking() {
    return this.page.locator('#page-title');
}
}
