import { newSpecPage } from '@stencil/core/testing';
import { BocePlannedAppointments } from '../boce-planned-appointments';

describe('boce-planned-appointments', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BocePlannedAppointments],
      html: `<boce-planned-appointments></boce-planned-appointments>`,
    });
    expect(page.root).toEqualHtml(`
      <boce-planned-appointments>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </boce-planned-appointments>
    `);
  });
});
