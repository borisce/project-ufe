import { newE2EPage } from '@stencil/core/testing';

describe('boce-patient-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<boce-patient-search></boce-patient-search>');

    const element = await page.find('boce-patient-search');
    expect(element).toHaveClass('hydrated');
  });
});
