import { newE2EPage } from '@stencil/core/testing';

describe('boce-create-term', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<boce-create-term></boce-create-term>');

    const element = await page.find('boce-create-term');
    expect(element).toHaveClass('hydrated');
  });
});
