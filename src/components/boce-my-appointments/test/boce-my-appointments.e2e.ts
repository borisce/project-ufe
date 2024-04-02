import { newE2EPage } from '@stencil/core/testing';

describe('boce-my-appointments', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<boce-my-appointments></boce-my-appointments>');

    const element = await page.find('boce-my-appointments');
    expect(element).toHaveClass('hydrated');
  });
});
