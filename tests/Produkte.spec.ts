import { test, expect } from '@playwright/test';

test.describe('PostFinance Produkte Page Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.postfinance.ch/ap/ga/ob/html/finance/home');
        await expect(page).toHaveTitle(/PostFinance/);
    });

    test('Verify Produkte page', async ({ page }) => {
        // Click on the "Produkte" link in the navigation menu
        await page.getByRole('link', { name: 'Produkte' }).click();
        //verify the Prodkte page has the following elements: "Konto", "Kreditkarten", "Sparen & Anlegen", "Vorsorge", "Versicherungen", "Finanzieren", "Zahlungsverkehr"

        await expect(page.getByRole('button', { name: 'Kreditkarten' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Anlegen' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Konten' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Vorsorgen' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Versichern' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Finanzieren' })).toBeVisible();
        await expect(page.locator('#widget-digitalGoods-title')).toContainText('Gutscheine');
        await expect(page.locator('#widget-travelFunds-title')).toContainText('Fremdwährung bestellen Reisebargeld');
        await expect(page.locator('#widget-multibankingOpening-title')).toContainText('Multibanking Konten anderer Banken hinzufügen');
    });


    test('Verify Produkte eröffnen Kreditkarten', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await page.getByRole('link', { name: 'Produkte' }).hover();
        await page.getByRole('link', { name: 'Produkte' }).click();
        //await page.getByRole('link', { name: 'Übersicht' }).click();
        // click on Kreditkarten
        await expect(page.getByRole('button', { name: 'Kreditkarten' })).toBeVisible();
        await page.getByRole('button', { name: 'Kreditkarten' }).click();
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/credit-card
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/credit-card');
        await expect(page.locator('fpui-product-card-wrapper')).toContainText('Visa Classic');
        await expect(page.locator('fpui-product-card-wrapper')).toContainText('Mastercard Standard');
        await expect(page.getByRole('link', { name: 'Visa Classic  Jetzt bestellen' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Visa Classic   Mehr erfahren' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Mastercard Standard  Jetzt' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Mastercard Standard   Mehr' })).toBeVisible();
    });


    test('Verify Produkte eröffnen Anlegen', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await page.getByRole('link', { name: 'Produkte' }).hover();
        await page.getByRole('link', { name: 'Produkte' }).click();
        // click on Anlegen
        await expect(page.getByRole('button', { name: 'Anlegen' })).toBeVisible();
        await page.getByRole('button', { name: 'Anlegen' }).click();
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/invest
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/invest');
    });


    test('Verify Produkte eröffnen Konten', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await page.getByRole('link', { name: 'Produkte' }).hover();
        await page.getByRole('link', { name: 'Produkte' }).click();
        // click on Konten
        await expect(page.getByRole('button', { name: 'Konten' })).toBeVisible();
        await page.getByRole('button', { name: 'Konten' }).click();
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/account
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/account');
    });

    test('Verify Produkte eröffnen Vorsorge', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await page.getByRole('link', { name: 'Produkte' }).hover();
        await page.getByRole('link', { name: 'Produkte' }).click();
        // click on Vorsorge
        await expect(page.getByRole('button', { name: 'Vorsorge' })).toBeVisible();
        await page.getByRole('button', { name: 'Vorsorge' }).click();
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/pension
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/pension');
    });

    test('Verify Produkte eröffnen Finanzieren', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await page.getByRole('link', { name: 'Produkte' }).hover();
        await page.getByRole('link', { name: 'Produkte' }).click();
        // click on Finanzieren
        await expect(page.getByRole('button', { name: 'Finanzieren' })).toBeVisible();
        await page.getByRole('button', { name: 'Finanzieren' }).click();
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/financing
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/financing');
    });


    test('Verify Produkte eröffnen Versichern', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await page.getByRole('link', { name: 'Produkte' }).hover();
        await page.getByRole('link', { name: 'Produkte' }).click();
        // click on Versichern
        await expect(page.getByRole('button', { name: 'Versichern' })).toBeVisible();
        await page.getByRole('button', { name: 'Versichern' }).click();
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/insurance
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/insurance');
    });


    test('Verify Gutscheine', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await page.getByRole('link', { name: 'Produkte' }).hover();
        await page.getByRole('link', { name: 'Produkte' }).click();
        // click on Details of Gutscheine
        await page.getByRole('link', { name: 'Details Gutscheine' }).click();
        await expect(page.locator('#page-title')).toContainText('Gutschein kaufen und verschenken');
        await expect(page.locator('tbody')).toContainText('Apple Gift Card');
        await expect(page.locator('tbody')).toContainText('Mein Gutschein');
        await page.getByText('30.00').first().click();
        await expect(page.locator('tbody')).toContainText('Apple Gift Card');
        await expect(page.locator('tbody')).toContainText('Verschenkt als PDF');
        await page.getByText('30.00').nth(1).click();
        await expect(page.locator('tbody')).toContainText('Apple Gift Card');
        await expect(page.locator('tbody')).toContainText('Verschenkt via SMS an +41 79 449 85 59');
        await page.getByText('30.00').nth(2).click();
        await expect(page.getByTestId('backNav-button')).toContainText('Zurück');
        await expect(page.locator('fpui-actions')).toContainText('Gutschein kaufen');
        await expect(page.locator('fpui-card-page')).toContainText('Fragen zu diesem Thema?');
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/digital-goods/show
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/digital-goods/show');
    });
    
    test('Verify Fremdwährung bestellen', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await page.getByRole('link', { name: 'Produkte' }).hover();
        await page.getByRole('link', { name: 'Produkte' }).click();
        // click on Weiter of Fremdwährung bestellen
        await page.getByRole('link', { name: 'Weiter', exact: true }).click();
        await expect(page.locator('#page-title')).toContainText('Fremdwährung bestellen');
        // click on the currency dropdown to display available currencies
        await page.getByTestId('currency-select').click();
        await expect(page.getByTestId('select-option-3941723')).toContainText('Schweizer Franken (CHF)');
        await expect(page.getByTestId('select-option-3941726')).toContainText('Euro (EUR)');
        await expect(page.getByTestId('select-option-3941736')).toContainText('US Dollar (USD)');
        await expect(page.getByTestId('select-option-3941751')).toContainText('Aegypten Pfund (EGP)');
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/travel-funds/change-detail
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/travel-funds/change-detail');
    });

    test('Verify Multibanking Konten anderer Banken hinzufügen', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await page.getByRole('link', { name: 'Produkte' }).hover();
        await page.getByRole('link', { name: 'Produkte' }).click();
        // click on Weiter of Multibanking Konten anderer Banken hinzufügen
        await page.getByRole('link', { name: 'Weiter Multibanking' }).click();
        await expect(page.locator('#page-title')).toContainText('Multibanking aktivieren');
        // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/multibanking-opening/thirdpartybank
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/multibanking-opening/thirdpartybank');
    });

});
