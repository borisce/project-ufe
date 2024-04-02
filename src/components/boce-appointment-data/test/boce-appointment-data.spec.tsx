import { newSpecPage } from '@stencil/core/testing';
import { BoceAppointmentData } from '../boce-appointment-data';

describe('boce-appointment-data', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BoceAppointmentData],
      html: `<boce-appointment-data></boce-appointment-data>`,
    });
    expect(page.root).toEqualHtml(`
      <boce-appointment-data>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </boce-appointment-data>
    `);
  });
});
