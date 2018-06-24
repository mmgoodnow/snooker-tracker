import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { routing } from "./app.routing";
import { AppComponent } from "./app.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { RankingsComponent } from "./rankings/rankings.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { UserServiceClient } from "./services/user.service.client";
import { LogoutComponent } from "./logout/logout.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";
import { AdminComponent } from "./admin/admin.component";

@NgModule({
	declarations: [
		AppComponent,
		SearchResultsComponent,
		RankingsComponent,
		NavbarComponent,
		LogoutComponent,
		LoginComponent,
		ProfileComponent,
		RegisterComponent,
		AdminComponent,
	],
	imports: [BrowserModule, FormsModule, routing],
	providers: [UserServiceClient],
	bootstrap: [AppComponent],
})
export class AppModule {}
