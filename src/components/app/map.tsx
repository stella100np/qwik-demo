import { useStore, component$, Host, useClientEffect$ } from '@builder.io/qwik';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TitleComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  VisualMapComponent,
  VisualMapComponentOption,
  GeoComponent,
  GeoComponentOption,
} from 'echarts/components';
import { MapChart, MapSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  MapChart,
  CanvasRenderer,
]);

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | VisualMapComponentOption
  | GeoComponentOption
  | MapSeriesOption
>;


export const Map = component$(() => {
  useClientEffect$(async () => {
    let option: EChartsOption;
    const DataVUrl = 'https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=100000_full';
    let chartDom = document.getElementById('my-map')!;
    let myChart = echarts.init(chartDom);
    let response = await fetch(DataVUrl);
    let chinaMapJson = await response.json();
    echarts.registerMap('CHINA', chinaMapJson);
    option = {
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
      },
      visualMap: {
        type: 'piecewise',
        pieces: [
          { color: '#002E4D', gte: 1500 },
          { color: '#005EB8', gt: 1000, lte: 1500 },
          { color: '#80C1FF', gt: 500, lte: 1000 },
          { color: '#999EA3', gt: 200, lte: 500 },
          { color: '##D8E0E9', lte: 200 },
        ],
      },
      series: [
        {
          name: '用户',
          type: 'map',
          roam: true,
          zoom: 1,
          center: [100, 36],
          map: 'CHINA',
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { name: '北京市', value: 500 },
            { name: '四川省', value: 2000 },
          ],
        },
      ],
    };
    option && myChart.setOption(option);

  })

  return (
    <Host class="h-full">
      <div id="my-map" class="container mx-auto h-full">
      </div>
    </Host>
  )
})