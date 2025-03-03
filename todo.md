# TODO [fluidd]

## Next Up

- add option to enable confirm dialog on estop
- notification translations
- fix new entries for layout not showing by default

- add machine.system_info
- add checksum option to file upload

- Update mesh box to center on mesh center if no relative index set
- Power on graph toggles back off on a klipper restart
- Authorization
- add cpu time / resource monitoring
- status card updates
  - add layer height :/
  - add total layers
  - flow calculation?
- better way to handle overall warnings
  - warn on gcode root not active
  - warn on mem low
  - warn on cputime too high
  - warn on systime too high
- allow re-ordering temp presets and cameras
- sync instances across moonraker db
- warning close with no save in file editor
- console
  - raw output option for the console, so users can easily copy / paste larger portions of the output.
  - move autoscroll
- macros
  - allow ordering of categories and macros
  - allow assignment of a color?
  - allow placing macros in specific cards (console, bed mesh etc..)

### Features

- Authentication
- history enhancements
  - graphing over time
  - move to its own page?
- better multi-printer management
  - improve multi-webcam setup
  - overview
  - easy change
- More macro layout options (categorize macros, ability to define layout in some way, color)
  - implement UI against default params
  - can activate with default, or enter params..
- file system enhancements
  - bulk actions to delete or move?
  - copy file
  - move dialog
  - bulk action move
- allow deletion of all printers on fluidd.xyz
- allow users to show / hide pin outputs

### Refactors

- rename device power store

### Docs

- update docs to mention cura uploads
- update docs re: output pins

## Filesystem Improvements

- Bulk actions on files

## Refactoring / Core

- loading heaters, fans or pins means these are constantly updated - due to temps changing
  often. Need a more elegant way to load just the names of these items without parts of the
  reactive data that is changed so often

- adding multiple printers to carry over between devices
- add a cached throttle to (socket notifications) temp updates, print timers, position trackers.

## Known Bugs

- if you complete a print, then delete the original gcode;
  - then you can still attempt to reprint something that's no longer there and;
  - the metadata load fails because the file is no longer there.

## General Improvements

## [Page] Printer Configuration

- PID calibrate option for heaters (hotend + bed etc)
- z-offset configuration + sheet config + probe calibration
- add stepper buzz
- add z endstop calibrate
- add widget for setting z offset during configuration
- add a widget to configure ztilt (needed?)

## User wants (not necessarily something we'll implement in the suggested way...)

- add QUERY_PROBE to endstops widget
- maybe look at tightening the mobile ui. have fan's as a value, that you can click
  on which then makes a popout to adjust fan?
- gcode viewer
- gcode analyser
- Cancel object, cancel area,
- gcode viewer that works with more than 25mb
- timelapses
- plugins for raise cloud, astroprint and alike
- to remote access without vpn
- more security?
