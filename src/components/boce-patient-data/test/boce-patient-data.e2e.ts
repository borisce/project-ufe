import { newE2EPage } from '@stencil/core/testing';

describe('boce-patient-data', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<boce-patient-data></boce-patient-data>');

    const element = await page.find('boce-patient-data');
    expect(element).toHaveClass('hydrated');
  });
});
