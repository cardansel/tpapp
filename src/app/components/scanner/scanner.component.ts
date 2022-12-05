import { Component } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent{

  title = 'app';
  public cameras:MediaDeviceInfo[]=[];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled=false;
  public results:string[]=[];

  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];

  constructor() {
    /*  navigator.mediaDevices.enumerateDevices().then((devices) => {
       for (var i = 0; i < devices.length; i++) {
         var device = devices[i];
         if (device.kind === 'videoinput') {
           console.log(device);
           this.myDevice = devices[1];
         }
       }
       console.log(this.myDevice);
     }); */
   }

   camerasFoundHandler(cameras: MediaDeviceInfo[]){
     this.cameras=cameras;
     this.selectCamera(this.cameras[0].label);
   }

   scanSuccessHandler(event:string){
     console.log(event);
     this.results.unshift(event);
   }

   selectCamera(cameraLabel: string){
     this.cameras.forEach(camera=>{
       if(camera.label.includes(cameraLabel)){
         this.myDevice=camera;
         console.log(camera.label);
         this.scannerEnabled=true;
       }
     })
   }

}
