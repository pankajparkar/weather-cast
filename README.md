# WeatherCast

This application shows the weather forecasting of 5 upcoming days. It also show details view of each day of 3hrs span.

## Prerequisites

Make sure you have Angular CLI globally installed in your machine, also make sure that npm have been already installed.

## Build and Run

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build (AOT enablede). Run `ng serve -o` for a dev run server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Test to be added

## Future Roadmap
Documents anything you might implement with more time (features, fixes, technical debt, corrections etc.)
#Features to be added
1. On change of Filters option button, update weather.
2. Use BehaviourSubject Observable to share `locationData` & update based weather value changes.
3. Add Details button on each day weather, that will open details on new page.
4. Based on day/night change theme color to light and dark.
5. Make UI more intuitive by improving details sections specifically.
6. Add server side rendering to improve intial rendering performance.
7. Divide dashboard component to smaller component. So that it can be useful in multiple place, like weather details page.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
