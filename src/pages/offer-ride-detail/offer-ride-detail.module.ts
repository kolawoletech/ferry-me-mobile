import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferRideDetailPage } from './offer-ride-detail';

@NgModule({
  declarations: [
    OfferRideDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OfferRideDetailPage),
  ],
})
export class OfferRideDetailPageModule {}
