import { newSpecPage } from '@stencil/core/testing';
import { BoceDoctorPatientsList } from '../boce-doctor-patients-list';

describe('boce-doctor-patients-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BoceDoctorPatientsList],
      html: `<boce-doctor-patients-list></boce-doctor-patients-list>`,
    });
    expect(page.root).toEqualHtml(`
      <boce-doctor-patients-list>
        <mock:shadow-root>
        <div class="component-body">
               <header>
                 <md-elevated-button>
                   Vytvor nového pacienta
                 </md-elevated-button>
                 <md-elevated-button>
                   Odhlásiť sa
                 </md-elevated-button>
               </header>
               <h1>
                 Zoznam objednaných pacientov
               </h1>
               <div class="filterflex">
                 <div class="datepickerflex">
                   <p class="headerinline">
                     Vyberte deň:
                   </p>
                   <input id="Test_DatetimeLocal" type="datetime-local">
                 </div>
               </div>
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
                     Bc. August Cézar
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
                     Ing. Ferdinand Trety
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
                   Pridaj nový termín vyšetrenia
                 </md-elevated-button>
               </div>
             </div>
        </mock:shadow-root>
      </boce-doctor-patients-list>
    `);
  });
});
