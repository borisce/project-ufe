import { newSpecPage } from '@stencil/core/testing';
import { BoceCreatePatient } from '../boce-create-patient';

describe('boce-create-patient', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BoceCreatePatient],
      html: `<boce-create-patient></boce-create-patient>`,
    });
    expect(page.root).toEqualHtml(`
      <boce-create-patient>
        <mock:shadow-root>
        <header>
               <md-elevated-button>
                 Odhlásiť sa
               </md-elevated-button>
             </header>
             <h1>
               Vytvorenie nového pacienta
             </h1>
             <form action="#">
               <div class="form-flex">
                 <h3>
                   Osobné údaje
                 </h3>
                 <label htmlfor="name">
                   Meno
                 </label>
                 <input id="name" placeholder="meno" type="text">
                 <label htmlfor="surname">
                   Priezvisko
                 </label>
                 <input id="surname" placeholder="priezvisko" type="text">
                 <h3>
                   Prihlasovacie údaje
                 </h3>
                 <label htmlfor="email">
                   Email
                 </label>
                 <input id="email" placeholder="email" type="email">
                 <label htmlfor="password">
                   Heslo
                 </label>
                 <input id="password" placeholder="heslo" type="password">
                 <div class="button-flex">
                   <md-elevated-button>
                     Zrušiť
                   </md-elevated-button>
                   <md-elevated-button>
                     Vytvoriť pacienta
                   </md-elevated-button>
                 </div>
               </div>
             </form>
        </mock:shadow-root>
      </boce-create-patient>
    `);
  });
});
