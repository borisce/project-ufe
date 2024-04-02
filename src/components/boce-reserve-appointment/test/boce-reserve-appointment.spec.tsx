import { newSpecPage } from '@stencil/core/testing';
import { BoceReserveAppointment } from '../boce-reserve-appointment';

describe('boce-reserve-appointment', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BoceReserveAppointment],
      html: `<boce-reserve-appointment></boce-reserve-appointment>`,
    });
    expect(page.root).toEqualHtml(`
      <boce-reserve-appointment>
        <mock:shadow-root>
        <div class="component-body">
               <header>
                 <md-elevated-button>
                   Odhlásiť sa
                 </md-elevated-button>
               </header>
               <h1>
                 Objednanie sa na vyšetrenie
               </h1>
               <div class="filterflex">
                 <div class="datepickerflex">
                   <p class="headerinline">
                     Vyberte deň:
                   </p>
                   <input id="Test_DatetimeLocal" type="date">
                 </div>
               </div>
               <md-list class="patient-list">
                 <md-list-item>
                   <div slot="supporting-text">
                     Termín vyšetrenia: 1.4. 2024 11:00-11:20
                   </div>
                   <input placeholder="Zadajte dôvod vyšetrenia" slot="end" type="text">
                   <md-elevated-button slot="end">
                     Rezervuj vyšetrenie
                   </md-elevated-button>
                 </md-list-item>
                 <md-list-item>
                   <div slot="supporting-text">
                     Termín vyšetrenia: 1.4. 2024 11:20-11:40
                   </div>
                   <input placeholder="Zadajte dôvod vyšetrenia" slot="end" type="text">
                   <md-elevated-button slot="end">
                     Rezervuj vyšetrenie
                   </md-elevated-button>
                 </md-list-item>
                 <md-list-item>
                   <div slot="supporting-text">
                     Termín vyšetrenia: 1.4. 2024 11:40-12:00
                   </div>
                   <input placeholder="Zadajte dôvod vyšetrenia" slot="end" type="text">
                   <md-elevated-button slot="end">
                     Rezervuj vyšetrenie
                   </md-elevated-button>
                 </md-list-item>
               </md-list>
               <div class="back-flex">
                 <md-elevated-button>
                   Späť
                 </md-elevated-button>
               </div>
             </div>
        </mock:shadow-root>
      </boce-reserve-appointment>
    `);
  });
});
