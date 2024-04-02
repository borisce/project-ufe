import { newE2EPage } from '@stencil/core/testing';

describe('boce-appointment-data', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<boce-appointment-data></boce-appointment-data>');

    const element = await page.find('boce-appointment-data');
    expect(element).toHaveClass('hydrated');
  });
});
