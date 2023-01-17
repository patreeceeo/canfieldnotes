import Page from "~/components/Page";
import {countPrompts, generatePrompt} from "~/functions/PromptFunctions";
import "./index.css"

export default function Prompt() {
  return (
    <Page withHeader>
      <h1>Random character prompt generator</h1>
      <p>Writer's block? Stuck in a creative rut? Not sure what to draw? Try:</p>
      <blockquote>
        <p>{generatePrompt()}</p>
      </blockquote>
      <p>One of {countPrompts()} possible combinations! Just refresh the page for a new one.</p>
      <p>The results are not necessarily observing any rules of good character design, like:</p>
      <ul class="list">
        <li>Cohesive look and feel that fits with their backstory, motivation, personality, world</li>
        <li>Uniqueness</li>
        <li><a class="link" href="https://www.youtube.com/watch?v=ZluGXgpdJj4">Big, medium, small</a></li>
        <li>Keep it simple</li>
      </ul>
      <p>Especially the last one. Since this essentially chooses random words/phrases for several placeholders mad-lib style, the results tend to be complicated and even self-contradictory. To get a good character design, you may need to pare down whatever this spits out in order to focus on what really matters for your character.</p>
    </Page>
  )
}
