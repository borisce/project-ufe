import { newSpecPage } from '@stencil/core/testing';
import { BoceLogin } from '../boce-login';

describe('boce-login', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BoceLogin],
      html: `<boce-login></boce-login>`,
    });
    expect(page.root).toEqualHtml(`
      <boce-login>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </boce-login>
    `);
  });
});
