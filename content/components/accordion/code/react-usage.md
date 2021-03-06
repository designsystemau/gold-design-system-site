---
layout: section
---

## React Usage

```jsx
import AUaccordion from '@gold.au/accordion';

<Accordion header="Open">
  Some content of the accordion <a href="#url">here</a>
</Accordion>

<Accordion closed header="Closed">
  Some content of the accordion <a href="#url">here</a>
</Accordion>

<Accordion header="Slow accordion" speed={ 1000 }>
  Some content of the accordion <a href="#url">here</a>
</Accordion>

<Accordion 
  header="With custom function" 
  onOpen={ () => { console.log('This function will run when the accordion opens'); } }
  afterOpen={ () => { console.log('This function will run after the accordion has opened'); } }
  onClose={ () => { console.log('This function will run when the accordion closes'); } }
  afterClose={ () => { console.log('This function will run after the accordion has closed'); } }
>
  Some content of the accordion <a href="#url">here</a>
</Accordion>

<Accordion closed={ this.state.accordionClosed } header="State controlled accordion open">
  Some content of the accordion <a href="#url">here</a>
</Accordion>
<button type="button" onClick={ () => { this.changeAccordion('accordionOpen') } }>
  Toggle accordion via state
</button>
```
