import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: svgString(),

})
export class LogoSvgComponent { }



export function svgString() {
  // tslint:disable-next-line: max-line-length
  return `<svg height="200" width="200  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 37.38"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#0055a3;}.cls-3{fill:#bed630;}.cls-4{fill:#f79727;}</style></defs><title>logo</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M21,22.59a3.36,3.36,0,0,1-1.13.25c-.35,0-1.09-.12-1.09-1.3a2,2,0,0,1,1.85-2,2.27,2.27,0,0,1,.92.21l.62-.94a3.83,3.83,0,0,0-1.78-.38c-1.5,0-3.87,1-4,3.35a2.11,2.11,0,0,0,2.35,2.26,7.89,7.89,0,0,0,2.63-.55Zm5,1.34H28.2l1.16-5.33H27.12l-.1.6a1.66,1.66,0,0,0-1.51-.73A3.44,3.44,0,0,0,22.3,22c0,1.26.66,2.07,1.61,2.07a4.49,4.49,0,0,0,2.21-.68Zm-.65-1c-.52,0-.69-.4-.69-1,0-1.54.89-2.41,1.45-2.41a.59.59,0,0,1,.61.66c-.11,1.94-.9,2.73-1.37,2.73m9.08-4a3.88,3.88,0,0,0-1.9-.47c-1.51,0-2.35.8-2.35,1.58a2,2,0,0,0,.7,1.3c.43.45.74.74.74,1.09s-.62.5-.74.5a3,3,0,0,1-1.24-.37l-.52,1.11a5.1,5.1,0,0,0,2.13.38c1.85,0,2.64-.81,2.64-1.6,0-.55-.45-1-.74-1.32s-.77-.73-.77-1.13.22-.45.57-.45a1.65,1.65,0,0,1,.81.23Zm2.9,2.61c.16-.73.54-1.75,1.38-1.75.15,0,.41.07.46.52a.77.77,0,0,1,0,.26l-.71,3.35h2.22l.74-3.43a3.33,3.33,0,0,0,.1-.83c0-.86-.49-1.2-1.37-1.2a3.37,3.37,0,0,0-2.37,1.11l.75-3.49H36.28l-1.69,7.84h2.22Z"/><path class="cls-1" d="M13.29,24A7.93,7.93,0,0,0,9.1,22.91c-5.25,0-9.1,3.27-9.1,7.87,0,3.4,2.75,6.6,7.53,6.6a12.89,12.89,0,0,0,3.69-.52l-.68-2.6a10.37,10.37,0,0,1-2.16.26,4.09,4.09,0,0,1-4-4c0-2.72,1.62-4.78,5-4.78a9.06,9.06,0,0,1,2.61.42Zm5.31,3.12H14.54l-2.09,10H16.5l.91-4.28c.42-2,1.64-2.48,2.56-2.48a2.57,2.57,0,0,1,1.11.2L23,27.66a2.49,2.49,0,0,0-1.85-.76c-1.48,0-2.27,1.58-2.54,2l-.27.38-.18,0Zm10.08,10h4l2.1-10H30.75l-.92,4.46c-.29,1.38-1,3.28-2.52,3.28-.27,0-.75-.12-.84-1a4.23,4.23,0,0,1,.05-.5l1.3-6.28H23.77l-1.35,6.44a8.9,8.9,0,0,0-.18,1.66c.06,1.48.83,2.14,2.5,2.14a6.1,6.1,0,0,0,4.32-2.08ZM44,27.78a7,7,0,0,0-3.48-.88c-2.74,0-4.28,1.5-4.28,3a3.66,3.66,0,0,0,1.27,2.44c.78.84,1.35,1.38,1.35,2,0,.92-1.13.94-1.35.94a5.26,5.26,0,0,1-2.26-.7l-.94,2.08a8.8,8.8,0,0,0,3.87.72c3.38,0,4.82-1.52,4.82-3a4.23,4.23,0,0,0-1.35-2.48c-.65-.82-1.4-1.36-1.4-2.12,0-.52.41-.84,1-.84a3,3,0,0,1,1.49.44Zm6.72,9.36h4l2.12-10h-4.1l-.18,1.12a3,3,0,0,0-2.75-1.36c-3.27,0-5.86,3.16-5.86,6.6,0,2.36,1.2,3.88,2.93,3.88a8,8,0,0,0,4-1.28ZM49.5,35.3c-1,0-1.27-.76-1.27-1.84,0-2.88,1.63-4.52,2.66-4.52A1.11,1.11,0,0,1,52,30.18c-.21,3.64-1.65,5.12-2.5,5.12m12.92,0c-1,0-1.27-.76-1.27-1.84,0-2.88,1.63-4.52,2.66-4.52a1.11,1.11,0,0,1,1.11,1.24c-.21,3.64-1.65,5.12-2.5,5.12m1.19,1.84h4l3.11-14.69h-4l-1.22,5.81a3,3,0,0,0-2.75-1.36c-3.27,0-5.86,3.16-5.86,6.6,0,2.36,1.2,3.88,2.93,3.88a7.9,7.9,0,0,0,4-1.28Zm15.51-3a6.87,6.87,0,0,1-2.88.84,1.73,1.73,0,0,1-1.9-2.16c3.29.08,6.9-1.16,6.9-3.32,0-1.92-1.83-2.64-4-2.64-2.89,0-7,1.82-7.19,6.52a3.84,3.84,0,0,0,3.94,4,13.9,13.9,0,0,0,6-1.6Zm-2.23-5.56c.72,0,1.17.42,1.13,1-.09,1.08-1.24,1.64-3.5,1.56.34-1.36,1-2.48,2.37-2.56M87.6,27.14H83.54l-2.09,10h4l.9-4.28c.43-2,1.65-2.48,2.57-2.48a2.57,2.57,0,0,1,1.11.2L92,27.66a2.49,2.49,0,0,0-1.85-.76c-1.49,0-2.27,1.58-2.54,2l-.27.38-.19,0Zm12.4.64a6.94,6.94,0,0,0-3.47-.88c-2.75,0-4.28,1.5-4.28,3a3.64,3.64,0,0,0,1.26,2.44c.79.84,1.35,1.38,1.35,2,0,.92-1.12.94-1.35.94a5.18,5.18,0,0,1-2.25-.7l-1,2.08a8.85,8.85,0,0,0,3.88.72c3.38,0,4.82-1.52,4.82-3a4.23,4.23,0,0,0-1.35-2.48c-.66-.82-1.4-1.36-1.4-2.12,0-.52.41-.84,1-.84a3,3,0,0,1,1.48.44Z"/><path class="cls-2" d="M41.91,4.65A27.59,27.59,0,0,1,52.61.48,27.52,27.52,0,0,1,63.92.69a4.86,4.86,0,0,1,3.87,3.79c0,.12,0,.23,0,.34a20.1,20.1,0,0,1-1.7,10A23.31,23.31,0,0,1,60,23.36a6.2,6.2,0,0,1-6.36,1.16,23.29,23.29,0,0,1-8.79-5.9,20,20,0,0,1-5-9,2.34,2.34,0,0,1,0-.3,4.86,4.86,0,0,1,2-4.53l.24-.17"/><path class="cls-1" d="M42.49,5.15,42.64,5A27.38,27.38,0,0,1,52.87,1.17a27.62,27.62,0,0,1,10.8.1,3.4,3.4,0,0,1,2.81,2.62,2.17,2.17,0,0,1,0,.25,17.79,17.79,0,0,1-1.71,9.15,22,22,0,0,1-6,7.82,4.57,4.57,0,0,1-2.26,1.06A4.49,4.49,0,0,1,54.14,22a21.58,21.58,0,0,1-8.34-5.32,17.48,17.48,0,0,1-4.75-8.11,1.16,1.16,0,0,1,0-.18,3.4,3.4,0,0,1,1.48-3.2"/><path class="cls-3" d="M56,20.82a3.72,3.72,0,0,1-1.37-.2,20.91,20.91,0,0,1-8-5,16.17,16.17,0,0,1-4.47-7.49,2.27,2.27,0,0,1,1-2l.07,0a26.66,26.66,0,0,1,9.44-3.59L53,3.91l-1.27.23L52,5.71a3.89,3.89,0,0,0-2.38,4,3.75,3.75,0,0,0,2.69,2.91c.6.23,1.17.44,1.61.66a2,2,0,0,1,.45.28.2.2,0,0,1,0,.11.83.83,0,0,1-.32.11,2.73,2.73,0,0,1-1-.09c-.44-.1-.87-.24-1.22-.35l-.73-.25-.92,3.55.57.24a7.65,7.65,0,0,0,3.34.44l.22,1.27,1.28-.22Z"/><path class="cls-4" d="M56.93,20.64l-.43-2.43L58,18l-.27-1.58c1.8-1,2.64-2.75,2.44-3.88a3.35,3.35,0,0,0,0-.34,3.05,3.05,0,0,0-.28-.82,4.14,4.14,0,0,0-2.13-1.82c-.67-.28-1.3-.5-1.78-.73a1.76,1.76,0,0,1-.44-.28.13.13,0,0,1-.06-.11.64.64,0,0,1,.19-.05A3.49,3.49,0,0,1,57,8.51l.68.19,1.05-3.38L58,5.16a10.67,10.67,0,0,0-2.34-.23l-.25-1.44-1.48.26L53.65,2.3a26.73,26.73,0,0,1,9.88.17,2.18,2.18,0,0,1,1.84,1.58.77.77,0,0,1,0,.15,16.14,16.14,0,0,1-1.62,8.45A20.53,20.53,0,0,1,58.06,20a3.44,3.44,0,0,1-1.13.64"/><path class="cls-2" d="M56.89,16l.25,1.39-2.29.4-.22-1.22A7.51,7.51,0,0,1,51,16.24L51.55,14a6.35,6.35,0,0,0,2.58.46c.65-.11,1-.44.89-1.05s-1.26-1-2.5-1.46A3.08,3.08,0,0,1,50.27,9.6c-.23-1.31.67-2.78,2.49-3.48l-.25-1.41,2.29-.4.25,1.35a9.92,9.92,0,0,1,2.78.19l-.62,2a4.26,4.26,0,0,0-1.74-.18c-.67.12-.87.42-.79.89.13.75,1.34,1.06,2.72,1.63,2.05.89,2,2.27,2,2.46.15.82-.58,2.48-2.54,3.36"/></g></g></svg>`
}
