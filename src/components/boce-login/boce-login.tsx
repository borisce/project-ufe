import { Component, Event, EventEmitter,  Host, h } from '@stencil/core';
import '@material/web/button/elevated-button';

@Component({
  tag: 'boce-login',
  styleUrl: 'boce-login.css',
  shadow: true,
})
export class BoceLogin {
  @Event({ eventName: "doctor-logged"}) doctorLogged: EventEmitter<string>;
  @Event({ eventName: "reserve-clicked"}) reserveClicked: EventEmitter<string>;

  render() {
    return (
      <Host>
        <h1>Prihlásenie do systému</h1>
        <form action="#">
          <div class="form-flex">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='email' id="email" />
            <label htmlFor="password">Heslo</label>
            <input type="password" placeholder='heslo' id="password" />
            <div class="button-flex">
              <md-elevated-button onClick={ () => this.doctorLogged.emit("doctor")}>Prihlásiť sa ako lekár</md-elevated-button>
              <md-elevated-button onClick={ () => this.reserveClicked.emit("my_appointments")}>Prihlásiť sa ako pacient</md-elevated-button>
            </div>
          </div>  
        </form>
      </Host>
    );
  }

}
