import { newSpecPage } from '@stencil/core/testing';
import { BoceCreatePatient } from '../boce-create-patient';

describe('boce-create-patient', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BoceCreatePatient],
      html: `<boce-create-patient></boce-create-patient>`,
    });
    expect(page.root).toEqualHtml(`
      <boce-create-patient>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </boce-create-patient>
    `);
  });
});
