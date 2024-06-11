import { create } from 'zustand';

interface Event {
    id: number;
    title: string;
    date: string;
}

interface Task {
    id: number;
    title: string;
    description: string;
    date: string;
}

interface State {
    events: Event[];
    tasks: Task[];
    addEvent: (event: Event) => void;
    addTask: (task: Task) => void;
    updateEvent: (event: Event) => void;
    updateTask: (task: Task) => void;
    deleteEvent: (id: number) => void;
    deleteTask: (id: number) => void;
    getEventByDate: (date: string) => Event[];
    getTaskByDate: (date: string) => Task[];
}

export const useStore = create<State>((set, get) => ({
    events: [],
    tasks: [],
    addEvent: (event: Event) => set((state) => ({ events: [...state.events, event] })),
    addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
    updateEvent: (updatedEvent: Event) => set((state) => ({
        events: state.events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event))
    })),
    updateTask: (updatedTask: Task) => set((state) => ({
        tasks: state.tasks.map((task) => (task.id === updatedTask.id ? updatedTask: task))
    })),
    deleteEvent: (id: number) => set((state) => ({
        events: state.events.filter((event) => event.id !== id)
    })),
    deleteTask: (id: number) => set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id)
    })),
    getEventByDate: (date: string) => get().events.filter((event) => event.date === date),
    getTaskByDate: (date: string) => get().tasks.filter((task) => task.date === date)
}))