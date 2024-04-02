import { newSpecPage } from '@stencil/core/testing';
import { BoceMyAppointments } from '../boce-my-appointments';

describe('boce-my-appointments', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BoceMyAppointments],
      html: `<boce-my-appointments></boce-my-appointments>`,
    });
    expect(page.root).toEqualHtml(`
      <boce-my-appointments>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </boce-my-appointments>
    `);
  });
});
