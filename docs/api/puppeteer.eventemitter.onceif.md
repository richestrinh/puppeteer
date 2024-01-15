---
sidebar_label: EventEmitter.onceIf
---

# EventEmitter.onceIf() method

Like `on` but the listener will only be fired once if the given predicate is satisfied and then it will be removed.

#### Signature:

```typescript
class EventEmitter {
  onceIf<Key extends keyof EventsWithWildcard<Events>>(
    type: Key,
    predicate: (data: EventsWithWildcard<Events>[Key]) => boolean,
    handler: Handler<EventsWithWildcard<Events>[Key]>
  ): this;
}
```

## Parameters

| Parameter | Type                                                                                                                  | Description                                       |
| --------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| type      | Key                                                                                                                   | the event you'd like to listen to                 |
| predicate | (data: [EventsWithWildcard](./puppeteer.eventswithwildcard.md)&lt;Events&gt;\[Key\]) =&gt; boolean                    | The predicate to use.                             |
| handler   | [Handler](./puppeteer.handler.md)&lt;[EventsWithWildcard](./puppeteer.eventswithwildcard.md)&lt;Events&gt;\[Key\]&gt; | the handler function to run when the event occurs |

**Returns:**

this

`this` to enable you to chain method calls.
