import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule, FormModule, GridModule, ButtonModule, ButtonGroupModule, DropdownModule, SharedModule, ListGroupModule } from '@coreui/angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule
  ]
})
export class ProfileModule { }
