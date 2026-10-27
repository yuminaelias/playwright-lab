
const { test, expect } = require('@playwright/test');

test('rejeita utilizador inexistente', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Activar modo com defeitos intencionais').check();

  await page.getByLabel('Email').fill('desconhecido@g3.test');
  await page.getByLabel('Senha').fill('Qualquer123!');
  await page.getByRole('button', { name: 'Entrar' }).click();

  await expect(page.locator('#loginMsg')).toHaveText('Credenciais inválidas');
});