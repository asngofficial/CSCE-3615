from flask import Flask, render_template  # Fixed import (Flask should be lowercase)
from datetime import datetime

app = Flask(__name__)

# DATE/TIME FORMAT: "dd/mm/yyyy hh:mm"
CurrentDateTime = datetime.now()


class Task:  # Task class for better structure
    def __init__(self, name, assigned_date, due_date):
        self.name = name
        self.assigned_date = assigned_date
        self.due_date = due_date

    def __repr__(self):  # String representation for easy debugging
        return f"Task('{self.name}', Assigned: {self.assigned_date}, Due: {self.due_date})"


class Course:  # Class for Course
    def __init__(self, course_name):
        self.course_name = course_name  # Corrected variable assignment
        self.tasks = []

    def add_task(self, task_name, assigned_date, due_date):
        task = Task(task_name, assigned_date, due_date)  # Creating a Task object
        self.tasks.append(task)

    def remove_task(self, task_name):
        # Remove a task by name (case-sensitive)
        self.tasks = [task for task in self.tasks if task.name != task_name]

    def show_tasks(self):
        return self.tasks


# Example Usage
cs_course = Course("CSCE 3220 - Human-Computer Interaction")
cs_course.add_task("Finish Project Proposal", "26/02/2025 12:00", "05/03/2025 23:59")
cs_course.add_task("Read Chapter 3", "27/02/2025 10:00", "01/03/2025 23:59")

print(f"Tasks for {cs_course.course_name}: {cs_course.show_tasks()}")

# Removing a task
cs_course.remove_task("Read Chapter 3")
print(f"Tasks after removal: {cs_course.show_tasks()}")


@app.route('/')
def home():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
