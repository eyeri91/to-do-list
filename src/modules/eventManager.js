export class EventManager {
  #events;
  constructor() {
    this.#events = [];
  }

  subscribe(eventName, subscribers) {
    if (this.#events[eventName]) {
      this.#events[eventName] = subscribers;
    } else {
      this.#events[eventName].push(subscribers);
    }
  }

  publish(eventName, data) {
    const subscribers = this.#events[eventName];
    for (const subscriber of subscribers) subscriber(data);
  }
}
