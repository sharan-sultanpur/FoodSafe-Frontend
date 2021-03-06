import { Component, OnInit,Input,Output,EventEmitter,ViewChild} from '@angular/core';
import { RawMaterialService } from '../../raw-material.service';


@Component({
  selector: 'app-sample-collection',
  templateUrl: './sample-collection.component.html',
  styleUrls: ['./sample-collection.component.scss']
})
export class SampleCollectionComponent implements OnInit {

  constructor(
  	  public rawMatService:RawMaterialService,
  	) {
 
     }

  public sampleArr:any="";   
   // @ViewChild('addsample') public addsample;

  public supplierLot:any="";
  public item: any = "";
  public selectedsupplierLot: any = "";

  ngOnInit() {
     // this.rawMatService.sampleCollection.get()
    //      .then((sample_response)=>{
    //        this.sample=smaple_response;
    //      });
      this.getSampleCount();     
      this.supplierLot = Array({}).fill(4).map((x,i)=>i); 
      this.sampleArr = Array(this.getSampleCount()).fill(4);
  }
  
  samples = [
      {
    
       "supplierLot"         :"testLot1",
       "newLot"              :"true",
       "po"                  :"po1",
       "totalQuantity"       : 10,
       "quantityPlanned"     :2,
       "qualityAnalysis"     :false,

     
       "indicatorTest"       :false,
       "pathogenTest"        :false,
       "virusTest"           :false,
       "pesticideTest"       :false,
        "comment" :"samples are uploaded properly"
       
     },
        {
       "supplierLot"         :"testLot2",
       "newLot"              :"false",
       "po"                  :"po234",
       "totalQuantity"       : 9,
       "quantityPlanned"     :2,
       "qualityAnalysis"     :true,

     
       "indicatorTest"       :true,
       "pathogenTest"        :true,
       "virusTest"           :true,
       "pesticideTest"       :true,
       "comment":"samples are uploaded properly"
     },
     {
       "supplierLot"         :"testLot3",
       "newLot"              :"false",
       "po"                  :"Po123",
       "totalQuantity"       : 10,
       "quantityPlanned"     :2,
       "qualityAnalysis"     :false,

     
       "indicatorTest"       :false,
       "pathogenTest"        :false,
       "virusTest"           :false,
       "pesticideTest"       :false,
       "comment":"some samples are uploaded properly"
     },
      {
       "supplierLot"         :"testLot4",
       "newLot"              :"false",
       "po"                  :"Po123",
       "totalQuantity"       : 50,
       "quantityPlanned"     :1,
       "qualityAnalysis"     :false,

     
       "indicatorTest"       :false,
       "pathogenTest"        :false,
       "virusTest"           :false,
       "pesticideTest"       :false,
       "comment":"some samples are uploaded properly"
     },

  ];

    public getSampleCount(){
      let total=0;
      if(this.samples instanceof Array){
          this.samples.forEach(function(e){
              total+=e.quantityPlanned?e.quantityPlanned:0
          })
      }
      return total;
  }

    samplecollection = [
          {         
               "supplierLot"         :"test1",
               "newLot"              :"true",
               "po"                  :"po1",
               "totalQuantity"       : 10,
               "quantityPlanned"     :1,
               "qualityAnalysis"     :false,

             
               "indicatorTest"       :false,
               "pathogenTest"        :false,
               "virusTest"           :false,
               "pesticideTest"       :false,
                "comment" :"samples are uploaded properly"
               
             },
                {
               "supplierLot"         :"test2",
               "newLot"              :"false",
               "po"                  :"po234",
               "totalQuantity"       : 9,
               "quantityPlanned"     :3,
               "qualityAnalysis"     :true,

             
               "indicatorTest"       :true,
               "pathogenTest"        :true,
               "virusTest"           :true,
               "pesticideTest"       :true,
               "comment":"samples are uploaded properly"
             },
                  {
               "supplierLot"         :"test3",
               "newLot"              :"false",
               "po"                  :"po234",
               "totalQuantity"       : 9,
               "quantityPlanned"     :3,
               "qualityAnalysis"     :true,

             
               "indicatorTest"       :true,
               "pathogenTest"        :true,
               "virusTest"           :true,
               "pesticideTest"       :true,
               "comment":"samples are uploaded properly"
        },
  ];



  //  public onSelect(selectedsupplierLot): void {
  //   if (selectedsupplierLot.supplierLot != '') {
  //     selectedsupplierLot.pathogenTest = (selectedsupplierLot.supplierLot == "true") ? true : false;
  //     selectedsupplierLot.qualityAnalysis = (selectedsupplierLot.supplierLot == "true") ? true : false;
  //     selectedsupplierLot.pesticideTest = (selectedsupplierLot.supplierLot == "true") ? true : false;
  //   }
  // }
public getsupplierLot(){
      let total=0;
      if(this.samplecollection instanceof Array){
          this.samplecollection.forEach(function(e){
              // this.supplierLot=supplierLot;
              // let index=supplierLot.findIndex(x=>x.supplierLot===samplecollection.supplierLot);
          })
      }
      return total;
  }
onSelect(supplierLot) { 
    this.selectedsupplierLot = null;
    for (let i = 0; i < this.supplierLot.length; i++)
    {
      if (this.supplierLot[i].id == this.supplierLot) {
        this.selectedsupplierLot = this.supplierLot[i];
      }
    }

  }

}