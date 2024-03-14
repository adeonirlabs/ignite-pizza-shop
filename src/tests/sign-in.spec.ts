import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
  await page.getByLabel('E-mail').fill('john.doe@example.com')
  await page.getByRole('button', { name: 'Entrar' }).click()

  expect(await page.getByText('Enviamos um link de autenticação para seu email!').isVisible())
})

test('sign in wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
  await page.getByLabel('E-mail').fill('wrong-email@example.com')
  await page.getByRole('button', { name: 'Entrar' }).click()

  expect(await page.getByText('Credenciais inválidas, tente novamente!').isVisible())
})

test('navigate to sign up page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Fazer cadastro' }).click()

  expect(page.url()).toContain('/sign-up')
})
