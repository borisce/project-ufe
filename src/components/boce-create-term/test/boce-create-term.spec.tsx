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
             <header>
               <md-elevated-button>
                 Odhlásiť sa
               </md-elevated-button>
             </header>
             <h1>
               Vytvorenie nového voľného termínu vyšetreania
             </h1>
             <form action="#">
               <div class="form-flex">
                 <label htmlfor="date">
                   Dátum vyšetrenia
                 </label>
                 <input id="date" type="date">
                 <label htmlfor="begintime">
                   Čas vyšetrenia
                 </label>
                 <input id="begintime" type="time">
                 <label htmlfor="endtime">
                   Čas ukončenia vyšetrenia
                 </label>
                 <input id="endtime" type="time">
                 <div class="button-flex">
                   <md-elevated-button>
                     Zrušiť
                   </md-elevated-button>
                   <md-elevated-button>
                     Vytvoriť voľný termín
                   </md-elevated-button>
                 </div>
               </div>
             </form>
        </mock:shadow-root>
      </boce-create-term>
    `);
  });
});
