import { Component, OnInit } from '@angular/core';
import { AbstractHwProfileWithIntelCpuV1 } from '../../../data/types/hardware-profiles/abstracts/AbstractNodeWithIntelCpu';
import workerNode from '../../../data/instances/cluster0/WorkerNodeInstance';
@Component({
  selector: 'ngx-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.scss'],
})
export class InstancesComponent implements OnInit {

  workerNode: AbstractHwProfileWithIntelCpuV1;

  constructor() {
    this.workerNode = workerNode;
  }

  ngOnInit(): void {
  }

}
