import { newSpecPage } from '@stencil/core/testing';
import { BocePatientSearch } from '../boce-patient-search';

describe('boce-patient-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BocePatientSearch],
      html: `<boce-patient-search></boce-patient-search>`,
    });
    expect(page.root).toEqualHtml(`
      <boce-patient-search>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </boce-patient-search>
    `);
  });
});
