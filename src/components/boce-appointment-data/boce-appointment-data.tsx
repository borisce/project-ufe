import { Component, Host, Prop, State, h, EventEmitter, Event } from '@stencil/core';
import '@material/web/button/elevated-button';

@Component({
  tag: 'boce-appointment-data',
  styleUrl: 'boce-appointment-data.css',
  shadow: true,
})
export class BoceAppointmentData {
  @Prop() match: any; // Using @Prop() match

  @Event({eventName: "editor-closed"})editorClosed: EventEmitter<string>;
  @Event({eventName: "logout-clicked"}) logoutClicked: EventEmitter<string>;
  @Event({eventName: "patientdetail-clicked"}) patientDetailClicked: EventEmitter<string>;
  
  render() {
    return (
      <Host>
        <div class="component-body">
        <header>
            <md-elevated-button onClick={ () => this.logoutClicked.emit("logout")}>Odhlásiť sa</md-elevated-button>
          </header>
          <h1>Záznam o vyšetrení</h1>
          <div class="data-flex">        
            <div class="patient-flex">
            <p><strong>Meno pacienta:</strong> Jožko Púčik</p>
            <md-elevated-button onClick={() => this.patientDetailClicked.emit("detail")}>Zobraz všetky záznamy pacienta</md-elevated-button>
            </div>

            <p><strong>Termín vyšetrenia:</strong> 1.4 2024 11:00-11:20</p>
            <label htmlFor="appointment_data_textarea">Záznam o vykonanom vyšetrení</label>
            <textarea name="appointment_data" id="appointment_data_textarea">Pacient je zdravý, má mierne
            vyšší tlak.</textarea>
          </div>
          <div class="buttons-flex">
            <md-elevated-button onClick={() => this.editorClosed.emit("close")}>Zrušiť</md-elevated-button>
            <md-elevated-button onClick={() => this.editorClosed.emit("save")}>Uložiť</md-elevated-button>
          </div>
        </div>
      </Host>
    );
  }

}
