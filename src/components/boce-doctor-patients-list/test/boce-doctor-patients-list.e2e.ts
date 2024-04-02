import { newE2EPage } from '@stencil/core/testing';

describe('boce-doctor-patients-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<boce-doctor-patients-list></boce-doctor-patients-list>');

    const element = await page.find('boce-doctor-patients-list');
    expect(element).toHaveClass('hydrated');
  });
});
