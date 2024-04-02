import { newSpecPage } from '@stencil/core/testing';
import { BoceReserveAppointment } from '../boce-reserve-appointment';

describe('boce-reserve-appointment', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BoceReserveAppointment],
      html: `<boce-reserve-appointment></boce-reserve-appointment>`,
    });
    expect(page.root).toEqualHtml(`
      <boce-reserve-appointment>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </boce-reserve-appointment>
    `);
  });
});
