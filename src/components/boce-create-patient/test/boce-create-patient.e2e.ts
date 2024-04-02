import { newE2EPage } from '@stencil/core/testing';

describe('boce-create-patient', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<boce-create-patient></boce-create-patient>');

    const element = await page.find('boce-create-patient');
    expect(element).toHaveClass('hydrated');
  });
});
