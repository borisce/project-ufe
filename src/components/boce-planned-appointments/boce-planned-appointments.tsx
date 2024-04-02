import { Component, Event, EventEmitter,  Host, h } from '@stencil/core';

@Component({
  tag: 'boce-planned-appointments',
  styleUrl: 'boce-planned-appointments.css',
  shadow: true,
})
export class BocePlannedAppointments {
  @Event({ eventName: "logout-clicked"}) logoutClicked: EventEmitter<string>;
  @Event({ eventName: "reserve-clicked"}) reserveClicked: EventEmitter<string>;



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
          <h1>Moje plánované vyšetrenia</h1>
          <div class="filterflex">
          </div>
          <md-list class="patient-list">
          {this.waitingPatients.map((patient) =>
              <md-list-item>
                <div slot="headline">{patient.name}</div>
                <div slot="supporting-text">{"Termín vyšetrenia: 1.4. 2024 " + patient.estimatedStart}</div>
                <div slot='supporting-text'>{"Dôvod vyšetrenia: "+ patient.condition}</div>
                <md-elevated-button slot="end" onClick={ () => this.reserveClicked.emit("cancel")}>Zruš vyšetrenie</md-elevated-button>
                <md-icon slot="start">person</md-icon>
              </md-list-item>
            )}
          </md-list>
          <div class="add-term">
          <md-elevated-button onClick={ () => this.reserveClicked.emit("back")}>Spät na históriu vyšetrení</md-elevated-button>
          </div>
        </div>
      </Host>
    );
  }

}
