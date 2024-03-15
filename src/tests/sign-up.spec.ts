import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up')
  await page.getByLabel('Estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Gerente').fill('John Doe')
  await page.getByLabel('E-mail').fill('john.doe@example.com')
  await page.getByLabel('Telefone').fill('11 2222-3333')
  await page.getByRole('button', { name: 'Cadastrar' }).click()

  await expect(page.getByText('Estabelecimento cadastrado com sucesso!')).toBeVisible()
})

test('sign up wrong credentials', async ({ page }) => {
  await page.goto('/sign-up')
  await page.getByLabel('Estabelecimento').fill('Invalid Name')
  await page.getByLabel('Gerente').fill('John Doe')
  await page.getByLabel('E-mail').fill('john.doe@example.com')
  await page.getByLabel('Telefone').fill('11 2222-3333')
  await page.getByRole('button', { name: 'Cadastrar' }).click()

  await expect(page.getByText('Erro ao cadastrar estabelecimento!')).toBeVisible()
})

test('navigate to sign in page', async ({ page }) => {
  await page.goto('/sign-up')
  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
