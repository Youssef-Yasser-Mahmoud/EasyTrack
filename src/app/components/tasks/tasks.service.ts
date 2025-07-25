import { Injectable } from '@angular/core';
import { newTask } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.dummyTasks = JSON.parse(tasks);
    }
  }

  private saveTasks() {
    return localStorage.setItem('tasks', JSON.stringify(this.dummyTasks));
  }

  getUserTasks(userId: string) {
    return this.dummyTasks.filter((task) => task.userId === userId);
  }

  addTask(newTask: newTask, userId: string) {
    this.dummyTasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });

    this.saveTasks();
  }

  removeTask(id: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== id);

    this.saveTasks();
  }
}
