import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginPage } from "./pages/login/login.page";

@NgModule({
    declarations: [
        LoginPage
    ],
    imports: [
        IonicModule,
        CommonModule,
        AuthRoutingModule
    ],
    exports: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AuthModule { }
