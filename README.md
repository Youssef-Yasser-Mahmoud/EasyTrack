# EasyTrack

`EasyTrack` is a **task management application** built with Angular. It enables users to select a user profile and manage tasks assigned to them, including viewing, adding, and marking tasks as complete. The application uses localStorage for persistent task data and features a clean, component-based UI.

## demo

https://easy-track-xi.vercel.app/

## Project Overview

- **User Selection:** Users are listed and can be selected to view their associated tasks.
- **Task Management:** For each user, you can add new tasks and mark tasks as complete.
- **Persistent Storage:** Tasks are stored in localStorage, ensuring data is retained across browser reloads.
- **UI Components:** The interface is built with custom Angular components for users, tasks, headers, and cards.

## Angular Features Used

- **Standalone Components:** All components (e.g., `AppComponent`, `UserComponent`, `TasksComponent`) are standalone, utilizing the `imports` property in their decorators.
- **NgIf & NgFor Directives:** Templates use Angular's structural directives for conditional rendering and looping, such as `@if` and `@for` in `app.component.html` and `tasks.component.html`.
- **Input & Output Properties:** Components communicate using `@Input` and `@Output` decorators. For example, `UserComponent` receives user data and emits selection events.
- **Event Binding:** User actions (like clicks) are handled with event bindings, e.g., `(click)="onSelectedUser()"`.
- **Services & Dependency Injection:** `TasksService` manages task data and is injected into components for shared state and logic.
- **Forms:** The `NewTaskComponent` uses Angular's `FormsModule` and `ngModel` for two-way data binding in forms.
- **Pipes:** The `TaskComponent` uses the `DatePipe` to format task due dates.
- **Routing Setup:** The project is configured for routing (see `app.config.ts`), though no routes are currently defined.
- **Application Configuration:** Uses `ApplicationConfig` for bootstrapping and zone change detection.

## Main Logic Components

- `AppComponent`
- `UserComponent`
- `TasksComponent`
- `TasksService`
