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
        <div class="component-body">
               <header>
                 <md-elevated-button>
                   Odhlásiť sa
                 </md-elevated-button>
               </header>
               <h1>
                 História mojich vyšetrení
               </h1>
               <div class="filterflex">
                 <div class="datepickerflex">
                   <p class="headerinline">
                     Vyberte deň:
                   </p>
                   <input id="Test_DatetimeLocal" type="datetime-local">
                 </div>
                 <md-elevated-button>
                   Zobraz plánované vyšetrenia
                 </md-elevated-button>
               </div>
               <md-list class="patient-list">
                 <md-list-item>
                   <div slot="headline">
                     Jožko Púčik
                   </div>
                   <div slot="supporting-text">
                     Termín vyšetrenia: 1.4. 2023 11:00-11:20
                   </div>
                   <div slot="supporting-text">
                     Dôvod vyšetrenia: Kontrola
                   </div>
                   <div slot="supporting-text">
                     Záznam o vykonanom vyšetrení:
                   </div>
                   <md-icon slot="start">
                     person
                   </md-icon>
                 </md-list-item>
                 <md-list-item>
                   <div slot="headline">
                     Jožko Púčik
                   </div>
                   <div slot="supporting-text">
                     Termín vyšetrenia: 1.4. 2023 11:20-11:40
                   </div>
                   <div slot="supporting-text">
                     Dôvod vyšetrenia: Teploty
                   </div>
                   <div slot="supporting-text">
                     Záznam o vykonanom vyšetrení:
                   </div>
                   <md-icon slot="start">
                     person
                   </md-icon>
                 </md-list-item>
                 <md-list-item>
                   <div slot="headline">
                     Jožko Púčik
                   </div>
                   <div slot="supporting-text">
                     Termín vyšetrenia: 1.4. 2023 11:40-12:00
                   </div>
                   <div slot="supporting-text">
                     Dôvod vyšetrenia: Bolesti hrdla
                   </div>
                   <div slot="supporting-text">
                     Záznam o vykonanom vyšetrení:
                   </div>
                   <md-icon slot="start">
                     person
                   </md-icon>
                 </md-list-item>
               </md-list>
               <div class="add-term">
                 <md-elevated-button>
                   Objednanie sa na termín vyšetrenia
                 </md-elevated-button>
               </div>
             </div>
        </mock:shadow-root>
      </boce-my-appointments>
    `);
  });
});
