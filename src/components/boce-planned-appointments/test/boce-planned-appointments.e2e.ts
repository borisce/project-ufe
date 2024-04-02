import { newE2EPage } from '@stencil/core/testing';

describe('boce-planned-appointments', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<boce-planned-appointments></boce-planned-appointments>');

    const element = await page.find('boce-planned-appointments');
    expect(element).toHaveClass('hydrated');
  });
});
