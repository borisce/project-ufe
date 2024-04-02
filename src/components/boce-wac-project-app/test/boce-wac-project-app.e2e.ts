import { newE2EPage } from '@stencil/core/testing';

describe('boce-wac-project-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<boce-wac-project-app></boce-wac-project-app>');

    const element = await page.find('boce-wac-project-app');
    expect(element).toHaveClass('hydrated');
  });
});
