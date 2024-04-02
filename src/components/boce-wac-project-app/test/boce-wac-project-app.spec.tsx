import { newSpecPage } from '@stencil/core/testing';
import { BoceWacProjectApp } from '../boce-wac-project-app';

describe('boce-wac-project-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BoceWacProjectApp],
      html: `<boce-wac-project-app></boce-wac-project-app>`,
    });
    expect(page.root).toEqualHtml(`
      <boce-wac-project-app>
        <mock:shadow-root>
        <boce-doctor-patients-list></boce-doctor-patients-list>
        </mock:shadow-root>
      </boce-wac-project-app>
    `);
  });
});
