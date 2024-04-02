import { newE2EPage } from '@stencil/core/testing';

describe('boce-reserve-appointment', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<boce-reserve-appointment></boce-reserve-appointment>');

    const element = await page.find('boce-reserve-appointment');
    expect(element).toHaveClass('hydrated');
  });
});
