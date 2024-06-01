import { Component, OnInit } from "@angular/core";
import { ArcElement, Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { DonutChart } from "src/lib/data-chart";

export interface DataSet {
  day: string;
  value: number;
  colorCode: string;
}

@Component({
  selector: "app-donut",
  templateUrl: "./donut.component.html",
  styleUrls: ["./donut.component.scss"],
  standalone: true,
})
export class DonutComponent implements OnInit {
  private data_set: DataSet[] = DonutChart();

  private data_values: any[] = [];
  private label_data: any[] = [];
  private color_data: any[] = [];

  private mychart: any;
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
    const randomScalingFactor = function () {
      return Math.round(Math.random() * 100);
    };
    const canvas: any = document.getElementById("donutchart");
    const dataLabel: any = document.getElementById("data-label");
    const ctx = canvas.getContext("2d");
    this.mychart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labelData,
        datasets: [
          {
            data: valuesData,
            backgroundColor: colorData,
            borderRadius: 30,
            borderWidth: 1, // Ancho del borde del conjunto de datos
            weight: 5,
          },
        ],
      },
      options: {
        cutout: 80,
        aspectRatio: 460 / 292,
        interaction: {
          mode: "index" as const,
          intersect: false,
        },
        transitions: {},
        plugins: {
          legend: {
            display: true,
            position: "right",
            fullSize: true,
            align: "center",
            labels: {
              padding: 18,
              textAlign: "center",
              color: "#252420",
              pointStyle: "circle",
              usePointStyle: true,
            },
            title: {
              display: true,
              text: "Lorem ipsum Chart",
              font: {
                weight: 700,
              },
            },
          },
          tooltip: {
            backgroundColor: "#252420",
            bodyColor: "#999689",
            borderColor: "red",
            boxPadding: 12,
            bodySpacing: 6,
            padding: 20,
            titleAlign: "left",
            titleFont: {
              size: 14,
              weight: 600,
              family: "Inter",
            },
            bodyFont: {
              size: 12,
              weight: 600,
              family: "Inter",
            },
          },
        },
        animation: true,
        rotation: 280,
        datasets: {
          doughnut: {
            spacing: 1,
          },
        },
        onClick: (
          Event: any,
          activeEls: {
            element: ArcElement;
            datasetIndex: number;
            index: number;
          }[]
        ) => {
          dataLabel.innerHTML = `
          <h1>
          ${Event.chart.data.datasets[0].data[activeEls[0].index]}
          </h1>
          <h3>
          June
          </h3>
          `;

          //console.log();
        },
      },
    });
  }
}
