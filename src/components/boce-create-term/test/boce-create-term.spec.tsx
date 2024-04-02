import { newSpecPage } from '@stencil/core/testing';
import { BoceCreateTerm } from '../boce-create-term';

describe('boce-create-term', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BoceCreateTerm],
      html: `<boce-create-term></boce-create-term>`,
    });
    expect(page.root).toEqualHtml(`
      <boce-create-term>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </boce-create-term>
    `);
  });
});
