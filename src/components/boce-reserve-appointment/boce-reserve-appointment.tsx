import { Component, Event, EventEmitter,  Host, h } from '@stencil/core';


@Component({
  tag: 'boce-reserve-appointment',
  styleUrl: 'boce-reserve-appointment.css',
  shadow: true,
})
export class BoceReserveAppointment {
  @Event({ eventName: "reserve-clicked"}) reserveClicked: EventEmitter<string>;
  @Event({ eventName: "logout-clicked"}) logoutClicked: EventEmitter<string>;

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
            <md-elevated-button onClick={ () => this.logoutClicked.emit("logout")}>Odhlásiť sa</md-elevated-button>
          </header>
          <h1>Objednanie sa na vyšetrenie</h1>
          <div class="filterflex">
            <div class = "datepickerflex">
            <p class='headerinline'>Vyberte deň:</p>
            <input type="date" id="Test_DatetimeLocal"></input>
            </div>
          </div>
          <md-list class="patient-list">
          {this.waitingPatients.map((patient) =>
              <md-list-item>
                <div slot="supporting-text">{"Termín vyšetrenia: 1.4. 2024 " + patient.estimatedStart}</div>
                <input slot='end' type="text" placeholder='Zadajte dôvod vyšetrenia' />
                <md-elevated-button slot="end" onClick={ () => this.reserveClicked.emit()}>Rezervuj vyšetrenie</md-elevated-button>
              </md-list-item>
            )}
          </md-list>
          <div class="back-flex">
          <md-elevated-button onClick={ () => this.reserveClicked.emit("back")}>Späť</md-elevated-button>
          </div>
        </div>
      </Host>
    );
  }

}
