import { h } from "hyperapp"
import { cc, EXPERTISE_STRINGS } from "../utils"
import Icon from "./Icon"
import Markdown from "./Markdown"

export default ({
  name,
  question,
  tags,
  answer,
  goodToHear,
  isOpen,
  expertise
}) => (state, actions) => (
  <div class="Question-wrapper">
    <div class={`Question__badge is-${EXPERTISE_STRINGS[expertise]}`}>
      {EXPERTISE_STRINGS[expertise]}
    </div>
    <div class="Question" key={name}>
      <div class={`Question__tag is-${tags[0]}`} />
      <Markdown class="Question__heading" content={`## ${question}`} />
      <button
        class="btn Question__button"
        onclick={() => actions.onAnswerButtonClick({ name, isOpen })}
      >
        <span>{isOpen ? "Hide" : "Show"} answer</span>
        <Icon
          class={cc("btn__icon", { "is-rotated": isOpen })}
          name="chevron-down"
        />
      </button>
      <div class={cc("Question__answer", { "is-open": isOpen })}>
        <Markdown content={answer} />
        {goodToHear.length ? <h4>Good to hear</h4> : null}
        <ul>{goodToHear.map(i => <Markdown node="li" content={i} />)}</ul>
      </div>
    </div>
  </div>
)
