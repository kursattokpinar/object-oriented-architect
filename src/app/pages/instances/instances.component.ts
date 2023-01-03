import { Component, OnInit } from '@angular/core';
import {rke2WorkerNodeTemplate} from '../../../data/templates/rke2-cluster/masterNodeTemplate';
@Component({
  selector: 'ngx-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.scss'],
})
export class InstancesComponent implements OnInit {

  workerNode: object;

  constructor() {
    this.workerNode = rke2WorkerNodeTemplate;
  }

  ngOnInit(): void {
  }

}
