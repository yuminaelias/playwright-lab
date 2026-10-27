const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('não permite registo duplicado do mesmo vendedor e mercado', async ({ page }) => {
  // 1. Activar o modo com defeitos intencionais
  await page.getByLabel('Activar modo com defeitos intencionais').uncheck();

  // 2. Primeiro registo
  await page.getByLabel('Nome').fill('Carlos Silva');
  await page.getByLabel('Mercado').fill('Mercado Central');
  await page.getByRole('button', { name: 'Guardar vendedor' }).click();
  await expect(page.locator('#lista li')).toHaveCount(1);

  // 3. Segundo registo com os mesmos dados
  await page.getByLabel('Nome').fill('Carlos Silva');
  await page.getByLabel('Mercado').fill('Mercado Central');
  await page.getByRole('button', { name: 'Guardar vendedor' }).click();

  // 4. Asserções
  await expect(page.locator('#cadMsg')).toHaveText('Vendedor já registado');
  await expect(page.locator('#lista li')).toHaveCount(1);
});