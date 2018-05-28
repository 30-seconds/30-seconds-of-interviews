import { h } from "hyperapp"
import Dropdown from "./Dropdown"

export default () => (state, actions) => (
  <div class="Filter">
    <div class="container">
      {state.filter.dropdowns.map(d => <Dropdown {...d} />)}
    </div>
  </div>
)
