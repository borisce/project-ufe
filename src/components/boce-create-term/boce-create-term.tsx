import { Component, Host, Prop, State, h, EventEmitter, Event } from '@stencil/core';
import '@material/web/list/list'
import '@material/web/list/list-item'
import '@material/web/icon/icon'
import '@material/web/button/elevated-button';

@Component({
  tag: 'boce-create-term',
  styleUrl: 'boce-create-term.css',
  shadow: true,
})
export class BoceCreateTerm {
  @Event({eventName: "createterm-closed"}) createTermClosed: EventEmitter<string>;
  @Event({eventName: "term-created"}) termCreated: EventEmitter<string>;
  @Event({eventName: "logout-clicked"}) logoutClicked: EventEmitter<string>;

  render() {
    return (
      <Host>
        <header>
            <md-elevated-button onClick={ () => this.logoutClicked.emit("logout")}>Odhlásiť sa</md-elevated-button>
        </header>
        <h1>Vytvorenie nového voľného termínu vyšetreania</h1>
        <form action="#">
          <div class="form-flex">
            <label htmlFor="date">Dátum vyšetrenia</label>
            <input type="date" id="date" />
            <label htmlFor="begintime">Čas vyšetrenia</label>
            <input type="time"  id="begintime" />
            <label htmlFor="endtime">Čas ukončenia vyšetrenia</label>
            <input type="time"  id="endtime" />
            <div class="button-flex">
              <md-elevated-button onClick={ () => this.createTermClosed.emit("close")}>Zrušiť</md-elevated-button>
              <md-elevated-button onClick={ () => this.termCreated.emit("save")}>Vytvoriť voľný termín</md-elevated-button>
            </div>
          </div>  
        </form>
      </Host>
    );
  }

}
