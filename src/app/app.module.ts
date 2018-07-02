
import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import {Landing } from '../pages/landing/landing';

import {Home } from '../pages/home/home';

import {Offerride } from '../pages/offerride/offerride';

import {Findride } from '../pages/findride/findride';

import { Offerridedetail } from '../pages/offerridedetail/offerridedetail';

import { Addcomment } from '../pages/addcomment/addcomment';

import { Loginpop } from '../pages/loginpop/loginpop';

import { Profile } from '../pages/profile/profile';

import { Editprofile } from '../pages/editprofile/editprofile';

import { Popover } from '../pages/popover/popover';

import { Editphoto } from '../pages/editphoto/editphoto';

import { Editpreference } from '../pages/editpreference/editpreference';

import { Editbio } from '../pages/editbio/editbio';

import { Addcar } from '../pages/addcar/addcar';

import { Addcarphoto } from '../pages/addcarphoto/addcarphoto';

import { Editid } from '../pages/editid/editid';

import { Addnumber } from '../pages/addnumber/addnumber';

import { Idupload } from '../pages/idupload/idupload';

import { Idedit } from '../pages/idedit/idedit';

import { Editcar } from '../pages/editcar/editcar';

import { Publicprofile } from '../pages/publicprofile/publicprofile';

import { Notification } from '../pages/notification/notification';

import { Ask } from '../pages/ask/ask';

import { Message } from '../pages/message/message';

import { Searchresult } from '../pages/searchresult/searchresult';

import { Bookpopup } from '../pages/bookpopup/bookpopup';

import { Filter } from '../pages/filter/filter';

import { Searchmain } from '../pages/searchmain/searchmain';

import { Contact } from '../pages/contact/contact';

import { Alert } from '../pages/alert/alert';

import { Ratting } from '../pages/ratting/ratting';

import { Thanks } from '../pages/thanks/thanks';

import { Popovermore } from '../pages/popovermore/popovermore';

import { Secureseat } from '../pages/secureseat/secureseat';

import { Request } from '../pages/request/request';

import { Summary } from '../pages/summary/summary';

import { Login } from '../pages/login/login';

import { Signup } from '../pages/signup/signup';

import { Verification } from '../pages/verification/verification';

import { Password } from '../pages/password/password';

import { Pickup } from '../pages/pickup/pickup';

import { Pickex } from '../pages/pickex/pickex';

import { Drop } from '../pages/drop/drop';

import { Dropex } from '../pages/dropex/dropex';

import { Chat } from '../pages/chat/chat';

import { Manage } from '../pages/manage/manage';



@NgModule({
  declarations: [
    MyApp,
    Landing,
    Home,
    Offerride,
    Findride,
    Offerridedetail,
    Addcomment,
    Loginpop,
    Profile,
    Editprofile,
    Popover,
    Editphoto,
    Editpreference,
    Editbio,
    Addcar,
    Addcarphoto,
    Editid,
    Addnumber,
    Idupload,
    Idedit,
    Editcar,
    Publicprofile,
    Notification,
    Ask,
    Message,
    Searchresult,
    Searchmain,
    Bookpopup,
    Filter,
    Searchmain,
    Contact,
    Alert,
    Ratting,
    Thanks,
    Popovermore,
    Secureseat,
    Request,
    Summary,
    Login,
    Signup,
    Verification,
    Password,
    Pickup,
    Pickex,
    Drop,
    Dropex,
    Chat,
    Manage


  ],
  imports: [
    IonicModule.forRoot(MyApp,
	 {
  platforms: {
    ios: {
      statusbarPadding: true
    }
  }
}

	)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Landing,
    Home,
    Offerride,
    Findride,
    Offerridedetail,
    Addcomment,
    Loginpop,
    Profile,
    Editprofile,
    Popover,
    Editphoto,
    Editpreference,
    Editbio,
    Addcar,
    Addcarphoto,
    Editid,
    Addnumber,
    Idupload,
    Idedit,
    Editcar,
    Publicprofile,
    Notification,
    Ask,
    Message,
    Searchresult,
    Searchmain,
    Bookpopup,
    Filter,
    Searchmain,
    Contact,
    Alert,
    Ratting,
    Thanks,
    Popovermore,
    Secureseat,
    Request,
    Summary,
    Login,
    Signup,
    Verification,
    Password,
    Pickup,
    Pickex,
    Drop,
    Dropex,
    Chat,
    Manage


  ],
  providers: []
})
export class AppModule {}
