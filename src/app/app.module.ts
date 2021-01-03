import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { KinveyModule } from "kinvey-nativescript-sdk/lib/angular";
import { UserService } from "./shared/user.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        KinveyModule.init({
            appKey: "kid_SyY8LYO8M",
            appSecret: "09282985d7c540f7b076a9c7fd884c77"
        })
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        UserService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
