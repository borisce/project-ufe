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
        <div class="component-body">
               <header>
                 <md-elevated-button>
                   Odhlásiť sa
                 </md-elevated-button>
               </header>
               <h1>
                 Zoznam vyšetrení pacienta Jožko Púčik
               </h1>
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
                   <div slot="supporting-text">
                     Záznam o vykonanom vyšetrení:
                   </div>
                   <md-icon slot="start">
                     person
                   </md-icon>
                   <md-elevated-button slot="end">
                     Uprav záznam o vyšetrení
                   </md-elevated-button>
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
                   <div slot="supporting-text">
                     Záznam o vykonanom vyšetrení:
                   </div>
                   <md-icon slot="start">
                     person
                   </md-icon>
                   <md-elevated-button slot="end">
                     Uprav záznam o vyšetrení
                   </md-elevated-button>
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
                   <div slot="supporting-text">
                     Záznam o vykonanom vyšetrení:
                   </div>
                   <md-icon slot="start">
                     person
                   </md-icon>
                   <md-elevated-button slot="end">
                     Uprav záznam o vyšetrení
                   </md-elevated-button>
                 </md-list-item>
               </md-list>
               <div class="add-term">
                 <md-elevated-button>
                   Späť na zoznam objednaných pacientov
                 </md-elevated-button>
               </div>
             </div>
        </mock:shadow-root>
      </boce-patient-data>
    `);
  });
});
