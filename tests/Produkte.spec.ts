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
         // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/savings
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/invest');
    });


    test('Verify Produkte eröffnen Konten', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await page.getByRole('link', { name: 'Produkte' }).hover();
        await page.getByRole('link', { name: 'Produkte' }).click();
        // click on Konten
        await expect(page.getByRole('button', { name: 'Konten' })).toBeVisible();
        await page.getByRole('button', { name: 'Konten' }).click();
         // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/savings
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/account');
    });

    test('Verify Produkte eröffnen Vorsorge', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await page.getByRole('link', { name: 'Produkte' }).hover();
        await page.getByRole('link', { name: 'Produkte' }).click();
        // click on Vorsorge
        await expect(page.getByRole('button', { name: 'Vorsorge' })).toBeVisible();
        await page.getByRole('button', { name: 'Vorsorge' }).click();
         // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/savings
         // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/savings
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/pension');
    });

    test('Verify Produkte eröffnen Finanzieren', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await page.getByRole('link', { name: 'Produkte' }).hover();
        await page.getByRole('link', { name: 'Produkte' }).click();
        // click on Finanzieren
        await expect(page.getByRole('button', { name: 'Finanzieren' })).toBeVisible();
        await page.getByRole('button', { name: 'Finanzieren' }).click();
         // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/savings
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/financing');
    });


    test('Verify Produkte eröffnen Versichern', async ({ page }) => {
        // click on the "Produkte" link in the navigation menu
        await page.getByRole('link', { name: 'Produkte' }).hover();
        await page.getByRole('link', { name: 'Produkte' }).click();
        // click on Versichern
        await expect(page.getByRole('button', { name: 'Versichern' })).toBeVisible();
        await page.getByRole('button', { name: 'Versichern' }).click();
         // verify url is https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/savings
        await expect(page).toHaveURL('https://www.postfinance.ch/ap/ga/ob/html/finance/offers/product-opening/insurance');
    });


});
