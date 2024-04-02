import { Component, Host, Prop, State, h, EventEmitter, Event } from '@stencil/core';
import '@material/web/list/list'
import '@material/web/list/list-item'
import '@material/web/icon/icon'
import '@material/web/button/elevated-button';

@Component({
  tag: 'boce-create-patient',
  styleUrl: 'boce-create-patient.css',
  shadow: true,
})
export class BoceCreatePatient {
  
  @Prop() entryId: string;

  @Event({eventName: "create-closed"}) createClosed: EventEmitter<string>;
  @Event({eventName: "patient-created"}) patientCreated: EventEmitter<string>;
  @Event({eventName: "logout-clicked"}) logoutClicked: EventEmitter<string>;

  render() {
    return (
      <Host>
        <header>
            <md-elevated-button onClick={ () => this.logoutClicked.emit("logout")}>Odhlásiť sa</md-elevated-button>
        </header>
        <h1>Vytvorenie nového pacienta</h1>
        <form action="#">
          <div class="form-flex">
            <h3>Osobné údaje</h3>
            <label htmlFor="name">Meno</label>
            <input type="text" placeholder='meno' id="name" />
            <label htmlFor="surname">Priezvisko</label>
            <input type="text" placeholder='priezvisko' id="surname" />
            <h3>Prihlasovacie údaje</h3>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='email' id="email" />
            <label htmlFor="password">Heslo</label>
            <input type="password" placeholder='heslo' id="password" />
            <div class="button-flex">
              <md-elevated-button onClick={ () => this.createClosed.emit("close")}>Zrušiť</md-elevated-button>
              <md-elevated-button onClick={ () => this.patientCreated.emit("save")}>Vytvoriť pacienta</md-elevated-button>
            </div>
          </div>  
        </form>
      </Host>
    );  
  }

}
