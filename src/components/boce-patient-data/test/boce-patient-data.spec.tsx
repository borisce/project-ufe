import { newSpecPage } from '@stencil/core/testing';
import { BocePatientData } from '../boce-patient-data';

describe('boce-patient-data', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BocePatientData],
      html: `<boce-patient-data></boce-patient-data>`,
    });
    expect(page.root).toEqualHtml(`
      <boce-patient-data>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </boce-patient-data>
    `);
  });
});
