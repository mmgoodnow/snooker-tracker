import { Routes, RouterModule } from "@angular/router";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { AdminComponent } from "./admin/admin.component";
import { PlayerViewerComponent } from "./player-viewer/player-viewer.component";
const appRoutes: Routes = [
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full",
	},
	{
		path: "home",
		component: SearchResultsComponent,
	},
	{
		path: "login",
		component: LoginComponent,
	},
	{
		path: "logout",
		component: LogoutComponent,
	},
	{
		path: "register",
		component: RegisterComponent,
	},
	{
		path: "profile",
		component: ProfileComponent,
	},
	{
		path: "admin",
		component: AdminComponent,
	},
	{
		path: "player/:playerId",
		component: PlayerViewerComponent,
	},
	{ path: "**", component: SearchResultsComponent }, // last
];
export const routing = RouterModule.forRoot(appRoutes);
