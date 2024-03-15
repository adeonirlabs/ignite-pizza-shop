import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in')
  await page.getByLabel('E-mail').fill('john.doe@example.com')
  await page.getByRole('button', { name: 'Entrar' }).click()

  await expect(page.getByText('Enviamos um link de autenticação para seu email!')).toBeVisible()
})

test('sign in wrong credentials', async ({ page }) => {
  await page.goto('/sign-in')
  await page.getByLabel('E-mail').fill('wrong-email@example.com')
  await page.getByRole('button', { name: 'Entrar' }).click()

  await expect(page.getByText('Credenciais inválidas, tente novamente!')).toBeVisible()
})

test('navigate to sign up page', async ({ page }) => {
  await page.goto('/sign-in')
  await page.getByRole('link', { name: 'Fazer cadastro' }).click()

  expect(page.url()).toContain('/sign-up')
})
