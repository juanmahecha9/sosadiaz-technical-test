import { Component, OnInit } from "@angular/core";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { BarChart } from "src/lib/data-chart";

export interface DataSet {
  day: string;
  value: number;
  colorCode: string;
}

@Component({
  selector: "app-bar",
  templateUrl: "./bar.component.html",
  styleUrls: ["./bar.component.scss"],
  standalone: true,
  imports: [],
})
export class BarComponent implements OnInit {
  private data_set: DataSet[] = BarChart();

  private data_values: any[] = [];
  private label_data: any[] = [];
  private color_data: any[] = [];

  constructor() {}

  ngOnInit() {
    this.data_set.map((data: DataSet) => {
      this.label_data.push(data.day);
      this.data_values.push(data.value);
      this.color_data.push(data.colorCode);
    });
    this.renderChart(this.label_data, this.data_values, this.color_data);
  }

  renderChart(labelData: any, valuesData: number[], colorData: any) {
    const mychart = new Chart("barchart", {
      type: "bar",
      data: {
        labels: labelData,
        datasets: [
          {
            label: "Value per day",
            data: valuesData,
            backgroundColor: colorData,
            borderRadius: 30,
          },
        ],
      },
      options: {
        transitions: {},
      },
    });
  }
}
