import React, { useState, useEffect } from 'react';
import {ISummaryLine, IProgram, IItem} from '../interfaces';
import {useServerData} from '../useServerData';
import {StyleSheet,TextInput,Button,View} from 'react-native';
import { IndexPath } from '@ui-kitten/components';
//import { Summary } from "./components/Summary";



 export const FixtureScreen = () => {
    const response = useServerData();
    console.log('get serverData',response);

   // var itemsSummary: ISummaryLine = [ISummaryLine];
  
   // var newSummaryObject: newSummaryObject = {ISummaryLine};
   var newSummaryObject = {} as ISummaryLine ;
    var summaryObjectArr = [] as ISummaryLine;


    var items = [] as  IItem;
    var programs = [] as IProgram;

    var costNum = 0;
    var programStr = '';
    var totalUnits = 0;

    // export interface ISummaryLine {
    //     id: number;
    //     name?: string;
    //     programs: [IProgram];
    //     cost: number;
    //     totalUnits: number;
    //     totalItems: number;
    //   }
      

    response.groups.map((group)=>{
        newSummaryObject.id = group.id;
        newSummaryObject.name = group.name;
          response.items.map((item)=>{
            if(group.id === item.itemGroupId) {
                items.push(item);
                console.log('shenu items list with group id',items);
            }
        
            response.programs.map((program)=>{

                items.forEach(programEle => {
                    console.log('items 4567 array',programEle);

                   programEle.programIds.forEach(programid => {

                    if(programid === program.id) {
                        programs.push(program);
                        console.log('shenu new program object printed',program);
                     }
                   });
                });
            });

            console.log('shenu items programs',programs);
        });

          

          items.forEach((newItem) => {
        //   newSummaryObject.cost = newItem?.cost;
        //     var finalItem = newItem;

        //     costNum = costNum + finalItem.cost;
        //     totalUnits+= newItem.totalUnits;

          });

          programs.forEach((newProgram) =>{
         //  programStr+= newProgram?.name;
          });

        //   newSummaryObject.cost = costNum;
        //   newSummaryObject.totalUnits = totalUnits;
        //   newSummaryObject.programs = programStr;
        //   summaryObjectArr.push(newSummaryObject);
        //   console.log('shenu sunnary line object',newSummaryObject);

    });
 
   // console.log('shenu sunnary line arr',summaryObjectArr);
  
    // var newArr: [ISummaryLine] = [];
    // var maparr = response.items.map((x) => {
    //   newSummaryObject.id = x.id;
    //   // itemsSummary.programs = x.programIds,
    //   newSummaryObject.cost = x.cost;
    //   newSummaryObject.totalUnits = x.totalUnits;
    //   itemsSummary.push(newSummaryObject);
    // });
  
    // console.log("new summary object arr", itemsSummary);
  
    // itemsSummary.forEach((element) => {
    //   print("object cost", element);
    // });
  //const [number, setNumber] = useState('');

//   useEffect(() => {

//    // getData();
//     // const response = useServerData();
//     // console.log("I am less experienced in react", response.items);

//   },[]);

//   const getData =  (()=>{
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const response = useServerData();


//   });
  





  return (
    <>
   <View>
    
   </View>
    </>
  );
  }

 const FixtureStyle = StyleSheet.create({

    input:{
      margin:'30%',
      borderWidth:2,
      borderColor:'blue',
      height:50,
      paddingHorizontal: 20
    },
    button:{
      margin:30,
      color:"#841584",
      accessibilityLabel:"Learn more about this purple button",
    
    }
  });

export default FixtureScreen;