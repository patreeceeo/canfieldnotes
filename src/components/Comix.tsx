import {createEffect, createSignal, For, onMount} from 'solid-js';
import './Comix.css'

export const ComixRow = (props) => {
  return <ol class="Comix-row">{props.children}</ol>
}
export const ComixPanel = (props) => {
  let img: HTMLImageElement;
  const [getAspectRatio, setAspectRatio] = createSignal<number>(1)
  onMount(() => {
    setAspectRatio(img.clientWidth / img.clientHeight)
  })
  return (
    /* <li class="Comix-panel" style={{"width": `${(getAspectRatio() || 1/2) * 50 }vw` }}><img src={props.imgSrc} alt={props.alt} title={props.title} ref={img}/></li> */
    <li class="Comix-panel" style={{"width": `${(props.ar || 1/2) * 50 }vw` }}><a class="reset-a" href={props.imgSrc}><img src={props.imgSrc} alt={props.alt} title={props.title} ref={img}/></a></li>
  )
}

