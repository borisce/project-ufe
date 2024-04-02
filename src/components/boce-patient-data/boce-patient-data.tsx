import { Component, Event, EventEmitter,  Host, h } from '@stencil/core';

@Component({
  tag: 'boce-patient-data',
  styleUrl: 'boce-patient-data.css',
  shadow: true,
})
export class BocePatientData {
  @Event({ eventName: "entry-clicked"}) entryClicked: EventEmitter<string>;
  @Event({ eventName: "logout-clicked"}) logoutClicked: EventEmitter<string>;
  @Event({ eventName: "list-clicked"}) listClicked: EventEmitter<string>;

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
            <md-elevated-button onClick={ () => this.logoutClicked.emit()}>Odhlásiť sa</md-elevated-button>
          </header>
          <h1>Zoznam vyšetrení pacienta Jožko Púčik</h1>

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
          <md-elevated-button onClick={ () => this.listClicked.emit()}>Späť na zoznam objednaných pacientov</md-elevated-button>
          </div>
        </div>
      </Host>
    );
  }
}  
