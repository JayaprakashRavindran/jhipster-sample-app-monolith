import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JHipsterSampleAppMonolithSharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [JHipsterSampleAppMonolithSharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent]
})
export class LogsModule {}
