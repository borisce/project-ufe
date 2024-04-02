import { newSpecPage } from '@stencil/core/testing';
import { BocePlannedAppointments } from '../boce-planned-appointments';

describe('boce-planned-appointments', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BocePlannedAppointments],
      html: `<boce-planned-appointments></boce-planned-appointments>`,
    });
    expect(page.root).toEqualHtml(`
      <boce-planned-appointments>
        <mock:shadow-root>
        <div class="component-body">
               <header>
                 <md-elevated-button>
                   Odhlásiť sa
                 </md-elevated-button>
               </header>
               <h1>
                 Moje plánované vyšetrenia
               </h1>
               <div class="filterflex"></div>
               <md-list class="patient-list">
                 <md-list-item>
                   <div slot="headline">
                     Jožko Púčik
                   </div>
                   <div slot="supporting-text">
                     Termín vyšetrenia: 1.4. 2024 11:00-11:20
                   </div>
                   <div slot="supporting-text">
                     Dôvod vyšetrenia: Kontrola
                   </div>
                   <md-elevated-button slot="end">
                     Zruš vyšetrenie
                   </md-elevated-button>
                   <md-icon slot="start">
                     person
                   </md-icon>
                 </md-list-item>
                 <md-list-item>
                   <div slot="headline">
                     Jožko Púčik
                   </div>
                   <div slot="supporting-text">
                     Termín vyšetrenia: 1.4. 2024 11:20-11:40
                   </div>
                   <div slot="supporting-text">
                     Dôvod vyšetrenia: Teploty
                   </div>
                   <md-elevated-button slot="end">
                     Zruš vyšetrenie
                   </md-elevated-button>
                   <md-icon slot="start">
                     person
                   </md-icon>
                 </md-list-item>
                 <md-list-item>
                   <div slot="headline">
                     Jožko Púčik
                   </div>
                   <div slot="supporting-text">
                     Termín vyšetrenia: 1.4. 2024 11:40-12:00
                   </div>
                   <div slot="supporting-text">
                     Dôvod vyšetrenia: Bolesti hrdla
                   </div>
                   <md-elevated-button slot="end">
                     Zruš vyšetrenie
                   </md-elevated-button>
                   <md-icon slot="start">
                     person
                   </md-icon>
                 </md-list-item>
               </md-list>
               <div class="add-term">
                 <md-elevated-button>
                   Spät na históriu vyšetrení
                 </md-elevated-button>
               </div>
             </div>
        </mock:shadow-root>
      </boce-planned-appointments>
    `);
  });
});
