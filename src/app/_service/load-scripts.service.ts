import { Injectable } from '@angular/core';


const scriptsArr = [
  '../../assets/scripts/jquery-2.2.0.min.js',
  '../../assets/scripts/jpanelmenu.min.js',
  '../../assets/scripts/chosen.min.js',
  '../../assets/scripts/slick.min.js',
  '../../assets/scripts/rangeslider.min.js',
  '../../assets/scripts/magnific-popup.min.js',
  '../../assets/scripts/waypoints.min.js',
  '../../assets/scripts/counterup.min.js',
  '../../assets/scripts/jquery-ui.min.js',
  '../../assets/scripts/tooltips.min.js',
  '../../assets/scripts/custom.js'
];

@Injectable({
  providedIn: 'root'
})
export class LoadScriptsService {
  loadAPI: Promise<any>;

  constructor() { }

  loadScripts() {

    this.loadAPI = new Promise((resolve) => {
      console.log('resolving promise...');
      this.loadScript();
    });

  }


  loadScript() {
    console.log('preparing to load...');

    scriptsArr.forEach((item, index) => {

      console.log(item);
      console.log(index);

    const node = document.createElement('script');
    node.src = item;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
    });

}

}
