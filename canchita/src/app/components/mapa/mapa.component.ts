import { Component, OnInit } from '@angular/core';
import {LocalService} from '../../services/local.service';
import {Local} from '../../models/Local';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
    icon = {
        url: "./assets/Recurso4.png"
    }
  title: string = 'My first AGM project';
  lat = -16.4302712;
  lng = -71.5192881;
  styles:any = [
                {
                    'featureType': 'all',
                    'elementType': 'all',
                    'stylers': [
                        {
                            'weight': '5.04'
                        },
                        {
                            'saturation': '18'
                        },
                        {
                            'lightness': '16'
                        }
                    ]
                },
                {
                    'featureType': 'all',
                    'elementType': 'labels.text',
                    'stylers': [
                        {
                            'lightness': '30'
                        },
                        {
                            'saturation': '33'
                        }
                    ]
                },
                {
                    'featureType': 'administrative',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#444444'
                        }
                    ]
                },
                {
                    'featureType': 'landscape',
                    'elementType': 'all',
                    'stylers': [
                        {
                            'color': '#f2f2f2'
                        }
                    ]
                },
                {
                    'featureType': 'landscape',
                    'elementType': 'labels.text',
                    'stylers': [
                        {
                            'visibility': 'simplified'
                        },
                        {
                            'hue': '#ff0000'
                        },
                        {
                            'weight': '3.55'
                        }
                    ]
                },
                {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'poi.park',
                    'elementType': 'all',
                    'stylers': [
                        {
                            'color': '#107e3e'
                        },
                        {
                            'visibility': 'on'
                        }
                    ]
                },
                {
                    'featureType': 'poi.park',
                    'elementType': 'labels.text',
                    'stylers': [
                        {
                            'lightness': '11'
                        },
                        {
                            'saturation': '-33'
                        },
                        {
                            'gamma': '1.84'
                        },
                        {
                            'weight': '1.29'
                        },
                        {
                            'color': '#aca3a3'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'all',
                    'stylers': [
                        {
                            'saturation': -100
                        },
                        {
                            'lightness': 45
                        },
                        {
                            'color': '#cdcdcd'
                        },
                        {
                            'weight': '2.35'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'visibility': 'on'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'geometry.stroke',
                    'stylers': [
                        {
                            'weight': '0.47'
                        },
                        {
                            'lightness': '3'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'labels.text',
                    'stylers': [
                        {
                            'color': '#1a1919'
                        },
                        {
                            'weight': '0.01'
                        }
                    ]
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'all',
                    'stylers': [
                        {
                            'visibility': 'off'
                        },
                        {
                            'color': '#0d0b0b'
                        }
                    ]
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'weight': '4.60'
                        },
                        {
                            'visibility': 'on'
                        },
                        {
                            'color': '#8c8484'
                        },
                        {
                            'gamma': '2.02'
                        }
                    ]
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'geometry.fill',
                    'stylers': [
                        {
                            'weight': '1.75'
                        },
                        {
                            'lightness': '19'
                        },
                        {
                            'saturation': '43'
                        }
                    ]
                },
                {
                    'featureType': 'road.arterial',
                    'elementType': 'all',
                    'stylers': [
                        {
                            'weight': '2.17'
                        },
                        {
                            'visibility': 'simplified'
                        },
                        {
                            'gamma': '0.53'
                        }
                    ]
                },
                {
                    'featureType': 'road.arterial',
                    'elementType': 'labels.text',
                    'stylers': [
                        {
                            'gamma': '0.00'
                        },
                        {
                            'lightness': '-45'
                        },
                        {
                            'saturation': '-100'
                        },
                        {
                            'invert_lightness': true
                        }
                    ]
                },
                {
                    'featureType': 'road.arterial',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'saturation': '-78'
                        },
                        {
                            'lightness': '-78'
                        }
                    ]
                },
                {
                    'featureType': 'road.arterial',
                    'elementType': 'labels.icon',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'road.local',
                    'elementType': 'all',
                    'stylers': [
                        {
                            'visibility': 'simplified'
                        }
                    ]
                },
                {
                    'featureType': 'road.local',
                    'elementType': 'geometry',
                    'stylers': [
                        {
                            'weight': '1.43'
                        }
                    ]
                },
                {
                    'featureType': 'transit',
                    'elementType': 'all',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': [
                        {
                            'color': '#6dcaea'
                        },
                        {
                            'visibility': 'on'
                        }
                    ]
                }
              ];
  locales:Local[] = [];

  constructor(private _sLocal:LocalService) {

  }
  ngOnInit() {
    this.locales = this._sLocal.getLocales();
  }
}
