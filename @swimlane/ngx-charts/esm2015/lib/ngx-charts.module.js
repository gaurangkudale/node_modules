import { NgModule } from '@angular/core';
import { ChartCommonModule } from './common/chart-common.module';
import { AreaChartModule } from './area-chart/area-chart.module';
import { BarChartModule } from './bar-chart/bar-chart.module';
import { BubbleChartModule } from './bubble-chart/bubble-chart.module';
import { HeatMapModule } from './heat-map/heat-map.module';
import { LineChartModule } from './line-chart/line-chart.module';
import { PolarChartModule } from './polar-chart/polar-chart.module';
import { NumberCardModule } from './number-card/number-card.module';
import { PieChartModule } from './pie-chart/pie-chart.module';
import { TreeMapModule } from './tree-map/tree-map.module';
import { GaugeModule } from './gauge/gauge.module';
import { ngxChartsPolyfills } from './polyfills';
export class NgxChartsModule {
    constructor() {
        ngxChartsPolyfills();
    }
}
NgxChartsModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    ChartCommonModule,
                    AreaChartModule,
                    BarChartModule,
                    BubbleChartModule,
                    HeatMapModule,
                    LineChartModule,
                    PolarChartModule,
                    NumberCardModule,
                    PieChartModule,
                    TreeMapModule,
                    GaugeModule
                ]
            },] }
];
NgxChartsModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoYXJ0cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWNoYXJ0cy9zcmMvIiwic291cmNlcyI6WyJsaWIvbmd4LWNoYXJ0cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBaUJqRCxNQUFNLE9BQU8sZUFBZTtJQUMxQjtRQUNFLGtCQUFrQixFQUFFLENBQUM7SUFDdkIsQ0FBQzs7O1lBbEJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixXQUFXO2lCQUNaO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRDb21tb25Nb2R1bGUgfSBmcm9tICcuL2NvbW1vbi9jaGFydC1jb21tb24ubW9kdWxlJztcbmltcG9ydCB7IEFyZWFDaGFydE1vZHVsZSB9IGZyb20gJy4vYXJlYS1jaGFydC9hcmVhLWNoYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBCYXJDaGFydE1vZHVsZSB9IGZyb20gJy4vYmFyLWNoYXJ0L2Jhci1jaGFydC5tb2R1bGUnO1xuaW1wb3J0IHsgQnViYmxlQ2hhcnRNb2R1bGUgfSBmcm9tICcuL2J1YmJsZS1jaGFydC9idWJibGUtY2hhcnQubW9kdWxlJztcbmltcG9ydCB7IEhlYXRNYXBNb2R1bGUgfSBmcm9tICcuL2hlYXQtbWFwL2hlYXQtbWFwLm1vZHVsZSc7XG5pbXBvcnQgeyBMaW5lQ2hhcnRNb2R1bGUgfSBmcm9tICcuL2xpbmUtY2hhcnQvbGluZS1jaGFydC5tb2R1bGUnO1xuaW1wb3J0IHsgUG9sYXJDaGFydE1vZHVsZSB9IGZyb20gJy4vcG9sYXItY2hhcnQvcG9sYXItY2hhcnQubW9kdWxlJztcbmltcG9ydCB7IE51bWJlckNhcmRNb2R1bGUgfSBmcm9tICcuL251bWJlci1jYXJkL251bWJlci1jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBQaWVDaGFydE1vZHVsZSB9IGZyb20gJy4vcGllLWNoYXJ0L3BpZS1jaGFydC5tb2R1bGUnO1xuaW1wb3J0IHsgVHJlZU1hcE1vZHVsZSB9IGZyb20gJy4vdHJlZS1tYXAvdHJlZS1tYXAubW9kdWxlJztcbmltcG9ydCB7IEdhdWdlTW9kdWxlIH0gZnJvbSAnLi9nYXVnZS9nYXVnZS5tb2R1bGUnO1xuaW1wb3J0IHsgbmd4Q2hhcnRzUG9seWZpbGxzIH0gZnJvbSAnLi9wb2x5ZmlsbHMnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbXG4gICAgQ2hhcnRDb21tb25Nb2R1bGUsXG4gICAgQXJlYUNoYXJ0TW9kdWxlLFxuICAgIEJhckNoYXJ0TW9kdWxlLFxuICAgIEJ1YmJsZUNoYXJ0TW9kdWxlLFxuICAgIEhlYXRNYXBNb2R1bGUsXG4gICAgTGluZUNoYXJ0TW9kdWxlLFxuICAgIFBvbGFyQ2hhcnRNb2R1bGUsXG4gICAgTnVtYmVyQ2FyZE1vZHVsZSxcbiAgICBQaWVDaGFydE1vZHVsZSxcbiAgICBUcmVlTWFwTW9kdWxlLFxuICAgIEdhdWdlTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4Q2hhcnRzTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbmd4Q2hhcnRzUG9seWZpbGxzKCk7XG4gIH1cbn1cbiJdfQ==