# WeatherCast

This application shows the weather forecasting of 5 upcoming days. It also show details view of each day of 3hrs span.

## Prerequisites

Make sure you have Angular CLI globally installed in your machine, also make sure that npm have been already installed.

## Build and Run

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build (AOT enablede). Run `ng serve -o` for a dev run server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests

## Future Roadmap

#Features to be added
1. Add Details button on each day weather, that will open details on new page.
2. Based on day/night change theme color to light and dark.
3. Make UI more intuitive by improving details sections specifically.
4. Convert these comopnents to embedable component, so that they can be used as widget using Angular Elements.

#Performance
1. Optimize page size, and intial page load, currently it takes 4 seconds.
2. Implement server side rendering to improve intial rendering performance.