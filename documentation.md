# Task List Widget

## Overview:
Creating a Task List (or To-do list) widget which allows users to add weekly tasks, mark them completed, and remove them.

## User Stories:

* As a college student, I want to add new tasks so that I can keep track of the things I need to do.
  * Acceptance Criteria:
    * User can enter a task name.
    * There is a button to submit new task.
    * The new task appears under a specified day.

* As a businessman, I want to mark tasks as completed so that I can see my progress.
  * Acceptance Criteria:
    * User can enter a task name.
    * There is a button to submit new task.
    * The new task appears under a specified day.
   
* As a teacher, I want to access my task list on multiple devices so that I can update and check my tasks from anywhere.
  * Acceptance Criteria:
    * The task list can be synchronized across devices.
    * Users can access their list from any device.

## Developer Stories:

* 


## Requirements:
* The widget must read in data from hardcoded JSON files.
* One should be able to add new tasks for a specific day.
* One should be able to mark and remove completed tasks.
* One should be able to use the widget using a keyboard (accessibility).
* One may have the ability to change background pictures.
* It could be used on a phone(flexibility).

## Specific components:
* Starter HTML, CSS, Javascript file
* Add task button + JSON stuff (split up adding button HTML, adding logic, JSON file logic)
* Remove task - clicking on a task should blur it out (blur out task, move to bottom, create button to delete all blurred out tasks)
* Rendering the tasks under different days on the HTML file (adding days with unordered lists below, creating dropdowns)
* Styling
