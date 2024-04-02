import { newSpecPage } from '@stencil/core/testing';
import { BoceAppointmentData } from '../boce-appointment-data';

describe('boce-appointment-data', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BoceAppointmentData],
      html: `<boce-appointment-data></boce-appointment-data>`,
    });
    expect(page.root).toEqualHtml(`
    <boce-appointment-data>
       <mock:shadow-root>
         <div class="component-body">
           <header>
             <md-elevated-button>
               Odhlásiť sa
             </md-elevated-button>
           </header>
           <h1>
             Záznam o vyšetrení
           </h1>
           <div class="data-flex">
             <div class="patient-flex">
               <p>
                 <strong>
                   Meno pacienta:
                 </strong>
                 Jožko Púčik
               </p>
               <md-elevated-button>
                 Zobraz všetky záznamy pacienta
               </md-elevated-button>
             </div>
             <p>
               <strong>
                 Termín vyšetrenia:
               </strong>
               1.4 2024 11:00-11:20
             </p>
             <label htmlfor="appointment_data_textarea">
               Záznam o vykonanom vyšetrení
             </label><textarea id="appointment_data_textarea" name="appointment_data">Pacient je zdravý, má mierne vyšší tlak.</textarea>
           </div>
           <div class="buttons-flex">
             <md-elevated-button>
               Zrušiť
             </md-elevated-button>
             <md-elevated-button>
               Uložiť
             </md-elevated-button>
           </div>
         </div>
       </mock:shadow-root>
     </boce-appointment-data>
    `);
  });
});
