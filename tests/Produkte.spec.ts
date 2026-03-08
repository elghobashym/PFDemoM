import { test, expect } from '@playwright/test';
import ProduktePage from '../pages/produkte';

test.describe('PostFinance Produkte Page Tests', () => {
    let produktePage: ProduktePage;

    test.beforeEach(async ({ page }) => {
        produktePage = new ProduktePage(page);
        await page.goto('https://www.postfinance.ch/ap/ga/ob/html/finance/home');
        await expect(page).toHaveTitle(/PostFinance/);
    });

    test('Verify Produkte page', async ({ page }) => {
        // Click on the "Produkte" link in the navigation menu
        await produktePage.clickProdukteLink();
        //verify the Prodkte page has the following elements: "Konto", "Kreditkarten", "Sparen & Anlegen", "Vorsorge", "Versicherungen", "Finanzieren", "Zahlungsverkehr"

        await expect(produktePage.widgetDigitalGoodsTitle()).toContainText('Gutscheine');
        await expect(produktePage.widgetTravelFundsTitle()).toContainText('Fremdwährung bestellen Reisebargeld');
        await expect(produktePage.widgetMultibankingOpeningTitle()).toContainText('Multibanking Konten anderer Banken hinzufügen');
    });


    test('Verify Produkte eröffnen Kreditkarten', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        //i need to hover over the "Produkte" link to display the dropdown menu and then click on "Kreditkarten"
        await produktePage.clickProdukteLink();
        // click on Kreditkarten
        await produktePage.clickKreditkartenButton();
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/credit-card
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/credit-card');
        await expect(produktePage.fpuiProductCardWrapper()).toContainText('Visa Classic');
        await expect(produktePage.fpuiProductCardWrapper()).toContainText('Mastercard Standard');
    });


    test('Verify Produkte eröffnen Anlegen', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await produktePage.clickProdukteLink();
        // click on Anlegen
        await produktePage.clickAnlegenButton();
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/invest
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/invest');
    });


    test('Verify Produkte eröffnen Konten', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await produktePage.clickProdukteLink();
        // click on Konten
        await produktePage.clickKontenButton();
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/account
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/account');
    });

    test('Verify Produkte eröffnen Vorsorge', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await produktePage.clickProdukteLink();
        // click on Vorsorge
        await produktePage.clickVorsorgeButton();
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/pension
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/pension');
    });

    test('Verify Produkte eröffnen Finanzieren', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await produktePage.clickProdukteLink();
        // click on Finanzieren
        await produktePage.clickFinanzierenButton();
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/financing
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/financing');
    });


    test('Verify Produkte eröffnen Versichern', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await produktePage.clickProdukteLink();
        // click on Versichern
        await produktePage.clickVersichernButton();
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/insurance
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/insurance');
    });


    test('Verify Gutscheine', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await produktePage.clickProdukteLink();
        // click on Details of Gutscheine
        await produktePage.clickDetailsGutscheineLink();
        await expect(produktePage.pageTitle()).toContainText('Gutschein kaufen und verschenken');
        await expect(produktePage.tbody()).toContainText('Apple Gift Card');
        await expect(produktePage.tbody()).toContainText('Mein Gutschein');
        await page.getByText('30.00').first().click();
        await expect(produktePage.tbody()).toContainText('Apple Gift Card');
        await expect(produktePage.tbody()).toContainText('Verschenkt als PDF');
        await page.getByText('30.00').nth(1).click();
        await expect(produktePage.tbody()).toContainText('Apple Gift Card');
        await expect(produktePage.tbody()).toContainText('Verschenkt via SMS an +41 79 449 85 59');
        await page.getByText('30.00').nth(2).click();
        await expect(produktePage.backNavButton()).toContainText('Zurück');
        await expect(produktePage.fpuiActions()).toContainText('Gutschein kaufen');
        await expect(produktePage.fpuiCardPage()).toContainText('Fragen zu diesem Thema?');
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/digital-goods/show
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/digital-goods/show');
    });
    
    test('Verify Fremdwährung bestellen', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await produktePage.clickProdukteLink();
        // click on Weiter of Fremdwährung bestellen
        await produktePage.clickWeiterLink();
        await expect(produktePage.pageTitle()).toContainText('Fremdwährung bestellen');
        // click on the currency dropdown to display available currencies
        await produktePage.currencySelect().click();
        await expect(produktePage.selectOptionCHF()).toContainText('Schweizer Franken (CHF)');
        await expect(produktePage.selectOptionEUR()).toContainText('Euro (EUR)');
        await expect(produktePage.selectOptionUSD()).toContainText('US Dollar (USD)');
        await expect(produktePage.selectOptionEGP()).toContainText('Aegypten Pfund (EGP)');
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/travel-funds/change-detail
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/travel-funds/change-detail');
    });

    test('Verify Multibanking Konten anderer Banken hinzufügen', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await produktePage.clickProdukteLink();
        // click on Weiter of Multibanking Konten anderer Banken hinzufügen
        await produktePage.clickWeiterMultibankingLink();
        await expect(produktePage.pageTitleMultibanking()).toContainText('Multibanking aktivieren');
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/multibanking-opening/thirdpartybank
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/multibanking-opening/thirdpartybank');
    });

});
