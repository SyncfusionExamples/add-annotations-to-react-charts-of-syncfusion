import React from 'react';
import './App.css';
import {marketData} from './data';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineSeries, Category,
  Inject, ChartAnnotation, AnnotationsDirective, AnnotationDirective} from '@syncfusion/ej2-react-charts';
function App() {
  return (
    <div style={{textAlign:"center", margin:'5%'}}>
      <ChartComponent title="Mobile Game Market" primaryXAxis={{valueType:"Category", title:"Years"}} 
      primaryYAxis={{title: 'Sales'}} legendSettings={{visible:true}}>
        <Inject services={[SplineSeries, Category, ChartAnnotation]}></Inject>
        <AnnotationsDirective>
          <AnnotationDirective x="38%" y="35%"
          content='<img src="https://ej2.syncfusion.com/react/demos/src/treegrid/images/__High.png" height="25px" width="25px"/>'></AnnotationDirective>
           <AnnotationDirective x={210} y={256} region="Series"
          content='<img src="https://ej2.syncfusion.com/react/demos/src/treegrid/images/__Low.png" height="25px" width="25px"/>'></AnnotationDirective>
           <AnnotationDirective x="2019" y={190} coordinateUnits="Point"
          content='<img src="https://ej2.syncfusion.com/react/demos/src/treegrid/images/__High.png" height="25px" width="25px"/>'></AnnotationDirective>
          <AnnotationDirective x="2017" y={19} coordinateUnits="Point" verticalAlignment="Bottom"
          content='<img src="https://ej2.syncfusion.com/react/demos/src/treegrid/images/__Low.png" height="25px" width="25px"/>'></AnnotationDirective>
        </AnnotationsDirective>
        <SeriesCollectionDirective> 
          <SeriesDirective type="Spline" dataSource={marketData} marker={{visible:true}}
          xName="x" yName="y0"></SeriesDirective>
          <SeriesDirective type="Spline" dataSource={marketData} marker={{visible:true}}
          xName="x" yName="y1"></SeriesDirective>
          <SeriesDirective type="Spline" dataSource={marketData} marker={{visible:true}}
          xName="x" yName="y2"></SeriesDirective>
          <SeriesDirective type="Spline" dataSource={marketData} marker={{visible:true}}
          xName="x" yName="y3"></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
export default App;

