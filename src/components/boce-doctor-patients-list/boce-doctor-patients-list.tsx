import { Component, Event, EventEmitter,  Host, h } from '@stencil/core';
import '@material/web/list/list'
import '@material/web/list/list-item'
import '@material/web/icon/icon'
import '@material/web/button/elevated-button';



@Component({
  tag: 'boce-doctor-patients-list',
  styleUrl: 'boce-doctor-patients-list.css',
  shadow: true,
})
export class BoceDoctorPatientsList {
  @Event({ eventName: "entry-clicked"}) entryClicked: EventEmitter<string>;
  @Event({ eventName: "new-clicked"}) newClicked: EventEmitter<string>;
  @Event({ eventName: "search-clicked"}) searchClicked: EventEmitter<string>;
  @Event({ eventName: "logout-clicked"}) logoutClicked: EventEmitter<string>;
  @Event({ eventName: "newterm-clicked"}) newTermClicked: EventEmitter<string>;

  waitingPatients: any[];

  private async getWaitingPatientsAsync(){
    return await Promise.resolve(
      [{
          name: 'Jožko Púčik',
          patientId: '10001',
          since: new Date(Date.now() - 10 * 60).toISOString(),
          estimatedStart: "11:00-11:20",
          estimatedDurationMinutes: 15,
          condition: 'Kontrola'
      }, {
          name: 'Bc. August Cézar',
          patientId: '10096',
          since: new Date(Date.now() - 30 * 60).toISOString(),
          estimatedStart: "11:20-11:40",
          estimatedDurationMinutes: 20,
          condition: 'Teploty'
      }, {
          name: 'Ing. Ferdinand Trety',
          patientId: '10028',
          since: new Date(Date.now() - 72 * 60).toISOString(),
          estimatedStart: "11:40-12:00",
          estimatedDurationMinutes: 15,
          condition: 'Bolesti hrdla'
      }]
    );
    }

    async componentWillLoad() {
      this.waitingPatients = await this.getWaitingPatientsAsync();
    }

  render() {
    return (
      <Host>
        <div class="component-body">
          <header>
            <md-elevated-button onClick={ () => this.newClicked.emit("create_patient")}>Vytvor nového pacienta</md-elevated-button>
            <md-elevated-button onClick={ () => this.logoutClicked.emit("logout")}>Odhlásiť sa</md-elevated-button>
          </header>
          <h1>Zoznam objednaných pacientov</h1>
          <div class="filterflex">
            <div class = "datepickerflex">
            <p class='headerinline'>Vyberte deň:</p>
            <input type="datetime-local" id="Test_DatetimeLocal"></input>
            </div>
          </div>
          <md-list class="patient-list">
          {this.waitingPatients.map((patient, index) =>
              <md-list-item>
                <div slot="headline">{patient.name}</div>
                <div slot="supporting-text">{"Termín vyšetrenia: 1.4. 2024 " + patient.estimatedStart}</div>
                <div slot='supporting-text'>{"Dôvod vyšetrenia: "+ patient.condition}</div>
                <div slot="supporting-text">{"Záznam o vykonanom vyšetrení: "}</div>
                <md-icon slot="start">person</md-icon>
                <md-elevated-button slot="end" onClick={ () => this.entryClicked.emit(index.toString())}>Uprav záznam o vyšetrení</md-elevated-button>
              </md-list-item>
            )}
          </md-list>
          <div class="add-term">
          <md-elevated-button onClick={ () => this.newTermClicked.emit("create_term")}>Pridaj nový termín vyšetrenia</md-elevated-button>
          </div>
        </div>
      </Host>
    );
  }

}
