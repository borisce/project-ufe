import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'boce-patient-search',
  styleUrl: 'boce-patient-search.css',
  shadow: true,
})
export class BocePatientSearch {

  render() {
    return (
      <Host>
        <h1>hladanie pacienta</h1>
      </Host>
    );
  }

}
