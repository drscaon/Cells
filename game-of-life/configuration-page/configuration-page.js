
class ConfigurationPage extends Polymer.Element
{
  static get is()
  {
    return 'configuration-page';
  }

  static get properties()
  {
    return {
      columns: { type: Number, value: 20, notify: true },
      rows: { type: Number, value: 20, notify: true },
      cellColor: { type: String, value: '#0000ff', notify: true }, // in RGB - Hexadecimal Code
      roughness: { type: Number, value: 1.0, notify: true },
      bornRules: { type: Array, value: [ 0, 0, 0, 1, 0, 0, 0, 0, 0 ], notify: true }, // 0: no change, 1: breed me
      dieRules: { type: Array, value: [ 1, 1, 0, 0, 1, 1, 1, 1, 1 ], notify: true } // 0: no change, 1: kill me
    }
  }

  connectedCallback()
  {
    super.connectedCallback();
  }

  tick()
  {
    this.shadowRoot.querySelector('game-field').calculateNextGeneration();
  }
}

customElements.define(ConfigurationPage.is, ConfigurationPage);
