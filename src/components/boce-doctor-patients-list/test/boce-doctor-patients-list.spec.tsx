import { newSpecPage } from '@stencil/core/testing';
import { BoceDoctorPatientsList } from '../boce-doctor-patients-list';

describe('boce-doctor-patients-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BoceDoctorPatientsList],
      html: `<boce-doctor-patients-list></boce-doctor-patients-list>`,
    });
    expect(page.root).toEqualHtml(`
      <boce-doctor-patients-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </boce-doctor-patients-list>
    `);
  });
});
