import { Component, Event, EventEmitter,  Host, h } from '@stencil/core';
import '@material/web/list/list'
import '@material/web/list/list-item'
import '@material/web/icon/icon'
import '@material/web/button/elevated-button';


@Component({
  tag: 'boce-my-appointments',
  styleUrl: 'boce-my-appointments.css',
  shadow: true,
})
export class BoceMyAppointments {
  @Event({ eventName: "logout-clicked"}) logoutClicked: EventEmitter<string>;
  @Event({ eventName: "planned-clicked"}) plannedClicked: EventEmitter<string>;
  @Event({ eventName: "available-clicked"}) availableClicked: EventEmitter<string>;


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
          name: 'Jožko Púčik',
          patientId: '10001',
          since: new Date(Date.now() - 30 * 60).toISOString(),
          estimatedStart: "11:20-11:40",
          estimatedDurationMinutes: 20,
          condition: 'Teploty'
      }, {
          name: 'Jožko Púčik',
          patientId: '10001',
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
            <md-elevated-button onClick={ () => this.logoutClicked.emit("logout")}>Odhlásiť sa</md-elevated-button>
          </header>
          <h1>História mojich vyšetrení</h1>
          <div class="filterflex">
            <div class = "datepickerflex">
            <p class='headerinline'>Vyberte deň:</p>
            <input type="datetime-local" id="Test_DatetimeLocal"></input>
            </div>
            <md-elevated-button onClick={ () => this.plannedClicked.emit("planned")}>Zobraz plánované vyšetrenia</md-elevated-button>
          </div>
          <md-list class="patient-list">
          {this.waitingPatients.map((patient) =>
              <md-list-item>
                <div slot="headline">{patient.name}</div>
                <div slot="supporting-text">{"Termín vyšetrenia: 1.4. 2023 " + patient.estimatedStart}</div>
                <div slot='supporting-text'>{"Dôvod vyšetrenia: "+ patient.condition}</div>
                <div slot="supporting-text">{"Záznam o vykonanom vyšetrení: "}</div>
                <md-icon slot="start">person</md-icon>
              </md-list-item>
            )}
          </md-list>
          <div class="add-term">
          <md-elevated-button onClick={ () => this.availableClicked.emit("create_term")}>Objednanie sa na termín vyšetrenia</md-elevated-button>
          </div>
        </div>
      </Host>
    );
  }

}
